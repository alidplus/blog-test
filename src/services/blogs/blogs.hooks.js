const { Forbidden, NotFound } = require("@feathersjs/errors");
const { alterItems, disallow, debug } = require("feathers-hooks-common");
const { authenticate } = require("@feathersjs/authentication").hooks;

async function CheckBlogOwnership() {
  return async context => {
    const { id, params, app } = context;
    const { user } = params;
    params.query = {
      authors: user._id
    }
  };
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [
      ctxt => {
        console.log(ctxt.id, typeof ctxt.id);
      }
    ],
    create: [
      authenticate("jwt"),
      async context => {
        const { params } = context;
        const { user } = params;
        if (user.role === "guest") {
          throw new Forbidden("You are not authorized to do this action");
        }
        context.data.authors = [user._id]
        context.data.view = 0
      }
    ],
    update: [disallow()],
    patch: [authenticate("jwt"), CheckBlogOwnership()],
    remove: [authenticate("jwt"), CheckBlogOwnership()]
  },

  after: {
    all: [],
    find: [],
    get: [
      alterItems(rec => rec.view + 1)
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
