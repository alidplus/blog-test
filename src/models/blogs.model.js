module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const blogs = new Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: '',
    },
    view: {
      type: Number,
      default: 0,
    },
    authors: [{ type: Schema.Types.ObjectId, ref: 'users' }]
  }, {
    timestamps: true
  });

  blogs.virtual('comments', {
    ref: 'comments',
    localField: '_id',
    foreignField: 'blog',
    justOne: false
  });

  blogs.virtual('likes', {
    ref: 'likes',
    localField: '_id',
    foreignField: 'blog',
    justOne: false
  });

  blogs.virtual('likesCount', {
    ref: 'likes',
    localField: '_id',
    foreignField: 'blog',
    count: true
  });

  try {
    return mongooseClient.model('blogs');
  } catch (e) {
    return mongooseClient.model('blogs', blogs);
  }
};
