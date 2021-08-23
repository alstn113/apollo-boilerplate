import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      _id
      title
      body
      author
    }
  }
`;

export const GET_POST = gql`
  query GetPost($_id: ID!) {
    getPost(_id: $_id) {
      _id
      title
      body
      author
    }
  }
`;
