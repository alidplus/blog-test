const { needsAuth, pagination } = require("../../utils/docs");

module.exports = {
  operations: {
    find: needsAuth(),
    get: needsAuth(),
    update: needsAuth(),
    patch: needsAuth(),
    remove: needsAuth()
  },
  definitions: {
    users: {
      type: "object",
      required: ["fullname", "email", "password"],
      properties: {
        fullname: {
          type: "string",
          description: "The fullname of user",
          example: "Jhon Doe"
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
    },
    usersPagination: pagination('users')
  }
};
