module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({

    fullname: { type: String, required: true },
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'author', 'guest'],
      default: 'guest',
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
