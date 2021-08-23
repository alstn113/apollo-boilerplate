import { gql } from "apollo-server-express";

export default gql`
  type Post {
    _id: ID
    title: String
    body: String
    author: String
  }

  # Queries
  type Query {
    getPosts: [Post]
    getPost(_id: ID): Post
  }

  # Mutations
  input PostInput {
    title: String
    body: String
    author: String
  }

  type Mutation {
    createPost(post: PostInput): Post
    deletePost(_id: ID): String
    updatePost(_id: ID, post: PostInput): Post
  }
`;
