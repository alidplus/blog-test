const { needsAuth, pagination, populates } = require("../../utils/docs");

module.exports = {
  idType: "string",
  operations: {
    get: populates("authors", "comments", "likes", "likesCount"),
    find: populates("authors", "comments", "likes", "likesCount"),
    create: needsAuth(),
    update: needsAuth(),
    patch: needsAuth(),
    remove: needsAuth()
  },
  definitions: {
    blogs: {
      type: "object",
      required: ["title", "content", "view"],
      properties: {
        title: {
          type: "string",
          description: "The title is written for blog"
        },
        content: {
          type: "string",
          description: "The content is written for blog"
        },
        view: {
          type: "number",
          description: "The number of blog view"
        }
      }
    },
    blogsPagination: pagination('blogs')
  }
};
