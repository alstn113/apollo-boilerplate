import { gql } from "apollo-server-express";

export default gql`
  type User {
    _id: ID
    username: ID
    hashedPassword: String
  }

  # Queries
  type Query {
    login(userInput: UserInput): User
  }

  # Mutations
  input UserInput {
    username: ID
    password: String
  }

  type Mutation {
    register(userInput: UserInput): User
  }
`;
