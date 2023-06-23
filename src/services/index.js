const users = require('./users/users.service.js');
const blogs = require('./blogs/blogs.service.js');
const comments = require('./comments/comments.service.js');
const likes = require('./likes/likes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(blogs);
  app.configure(comments);
  app.configure(likes);
};
