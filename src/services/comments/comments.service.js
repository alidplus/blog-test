const { Comments } = require('./comments.class');
const createModel = require('../../models/comments.model');
const hooks = require('./comments.hooks');
const docs = require('./comments.docs');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  const service = new Comments(options, app);

  service.docs = docs;

  app.use('/comments', service);

  delete app.docs.paths['/comments/{_id}'].patch;
  delete app.docs.paths['/comments/{_id}'].put;

  app.service('comments').hooks(hooks);
};
