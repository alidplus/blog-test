module.exports = {
  info: {
    title: "Blog",
    description: "A Test Blog API specs",
    version: "1.0.0"
  },
  security: [{ bearerAuth: [] }],
  servers: [
    {
      url: "http://localhost:3030",
      description: "Local server (uses local data)"
    },
    {
      url: "https://by05r5x7fj.execute-api.eu-central-1.amazonaws.com/",
      description: "Sandbox server (uses real data)"
    }
  ],
  components: {
    schemas: {
      authentication: {
        type: "object",
        properties: {
          strategy: {
            type: "string",
            example: "local"
          },
          email: {
            type: "string",
            description: "Email address of user",
            example: "jhon_doe@example.com"
          },
          password: {
            type: "string",
            description: "Passparse for login",
            example: "123456"
          }
        }
      }
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  }
};
