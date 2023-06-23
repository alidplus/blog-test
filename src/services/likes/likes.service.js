const { Likes } = require('./likes.class');
const createModel = require('../../models/likes.model');
const hooks = require('./likes.hooks');
const docs = require('./likes.docs');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  const service = new Likes(options, app);

  service.docs = docs;

  app.use('/likes', service);

  delete app.docs.paths['/likes'].get;
  delete app.docs.paths['/likes/{_id}'].get;
  delete app.docs.paths['/likes/{_id}'].patch;
  delete app.docs.paths['/likes/{_id}'].put;

  app.service('likes').hooks(hooks);
};
