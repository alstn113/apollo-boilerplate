import Post from "../../models/post";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

export default {
  Query: {
    getPosts: async () => {
      const posts = await Post.find({});
      return posts;
    },
    getPost: async (_, args) => {
      const { _id } = args;
      if (!ObjectId.isValid(_id)) {
        throw new Error("BAD REQUEST");
      }
      const post = await Post.findById(_id);
      if (!post) {
        throw new Error("NOT FOUND");
      }
      return post;
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
      const post = await Post.findByIdAndRemove(_id);
      return post;
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
