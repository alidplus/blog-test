const { authenticate } = require('@feathersjs/authentication').hooks;
const { disallow, iff, isProvider } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [],
    find: [disallow()],
    get: [disallow()],
    create: [
      authenticate('jwt'),
      async (context) => {
        const { params } = context;
        const { user } = params;
        context.data.user = user._id;
      },
    ],
    update: [disallow()],
    patch: [disallow()],
    remove: [
      iff(
        isProvider('external'),
        [
          authenticate('jwt'),
          async (context) => {
            const { params } = context;
            const { user } = params;
            context.params.query = {
              ...context.params.query,
              user: user._id
            };
          }
        ]
      )
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
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
