const { Service } = require('feathers-mongoose');

exports.Blogs = class Blogs extends Service {
  async incrementViews(id) {
    const blog = await this.Model.findById(id);
    if (!blog) {
      throw new Error('Blog not found');
    }
    blog.views += 1;
    await blog.save();
    return blog;
  }
  async get(id, params) {
    const data = await super.get(id, params)
    try {
      this.patch({ views: data.views + 1 })
    } catch {}
    return data
  }
};
