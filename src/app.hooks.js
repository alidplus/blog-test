const { ObjectID } = require('mongodb');

module.exports = {
  before: {
    all: [
      ctxt => {
        if (ctxt.id) ctxt.id = ObjectID(ctxt.id)
      }
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
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
