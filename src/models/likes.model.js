const mongoose = require('mongoose');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const likes = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'blogs',
      required: true
    }
  }, {
    timestamps: true
  });

  likes.index({ user: 1, blog: 1}, { unique: true });

  try {
    return mongooseClient.model('likes');
  } catch (e) {
    return mongooseClient.model('likes', likes);
  }
};
