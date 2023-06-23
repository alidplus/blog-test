const { needsAuth } = require("../../utils/docs");

module.exports = {
  operations: {
    create: needsAuth(),
    remove: needsAuth()
  },
  definitions: {
    likes: {
      type: "object",
      required: ["user", "blog"],
      properties: {
        user: {
          type: "string",
          description: "ID of the user who likes"
        },
        blog: {
          type: "string",
          description: "The blog that the user liked"
        }
      }
    },
    likesPagination: {
      type: "object",
      properties: {
        total: {
          type: "number",
          description: ""
        },
        skip: {
          type: "number",
          description: ""
        },
        limit: {
          type: "number",
          description: ""
        },
        data: {
          title: "likes list",
          type: "array",
          items: {
            $ref: "#/components/schemas/likes"
          }
        }
      }
    }
  }
};
