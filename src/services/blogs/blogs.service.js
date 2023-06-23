const { Blogs } = require('./blogs.class');
const createModel = require('../../models/blogs.model');
const hooks = require('./blogs.hooks');
const docs = require('./blogs.docs');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$populate']
  };

  const service = new Blogs(options, app);

  service.docs = docs;

  app.use('/blogs', service);

  delete app.docs.paths['/blogs/{_id}'].put;

  app.service('blogs').hooks(hooks);
};
