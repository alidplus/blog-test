const { disallow, iff, isProvider } = require('feathers-hooks-common');

const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate('jwt'),
      async (context) => {
        const { params } = context;
        const { user } = params;
        context.data.user = user._id;
      },
    ],
    update: [disallow('external')],
    patch: [disallow('external')],
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
    create: [
    ],
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
