import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost($post: PostInput!) {
    createPost(post: $post) {
      _id
      title
      body
      author
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($_id: ID!) {
    deletePost(_id: $_id) {
      _id
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($post: PostInput!) {
    updatePost(post: $post) {
      _id
      title
      body
      author
    }
  }
`;
