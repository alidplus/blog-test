const mongoose = require('mongoose');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const comments = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'blogs',
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  });

  try {
    return mongooseClient.model('comments');
  } catch (e) {
    return mongooseClient.model('comments', comments);
  }
};
