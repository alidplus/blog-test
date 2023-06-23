const { needsAuth, pagination, populates } = require("../../utils/docs");

module.exports = {
  operations: {
    get: populates("user"),
    find: populates("user"),
    create: needsAuth(),
    remove: needsAuth()
  },
  definitions: {
    comments: {
      type: "object",
      required: ["user", "blog", "comment"],
      properties: {
        user: {
          type: "string",
          description: "ID of the user who left the comment"
        },
        comment: {
          type: "string",
          description: "The comment left by the user"
        },
        blog: {
          type: "string",
          description: "The blog ID where the comment was posted"
        }
      }
    },
    commentsPagination: pagination('comments')
  }
};
