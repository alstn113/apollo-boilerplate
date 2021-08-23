import Post from "../../models/post";

export default {
  Query: {
    getPosts: async () => {
      return await Post.find({});
    },
    getPost: async (_, args) => {
      const { _id } = args;
      return await Post.findById(_id);
    },
  },
  Mutation: {
    createPost: async (_, args) => {
      const { title, body, author } = args.post;
      const newPost = await Post.create({ title, body, author });
      return newPost;
    },
    deletePost: async (_, args) => {
      const { _id } = args;
      await Post.findByIdAndRemove(_id);
      return `OK YOU DELETE A Post ${_id} `;
    },
    updatePost: async (_, args) => {
      const { _id } = args;
      const { title, body, author } = args.post;
      const updates = {};
      if (title !== undefined) {
        updates.title = title;
      }
      if (body !== undefined) {
        updates.body = body;
      }
      if (author !== undefined) {
        updates.author = author;
      }
      const post = await Post.findByIdAndUpdate(_id, updates, { new: true });
      return post;
    },
  },
};
