const { Users } = require('./users.class');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');
const docs = require('./users.docs');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  const service = new Users(options, app);

  service.docs = docs;

  app.use('/users', service);

  delete app.docs.paths['/users/{_id}'].put;

  app.service('users').hooks(hooks);
};
