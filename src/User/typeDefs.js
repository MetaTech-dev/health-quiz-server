import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    personId: ID!
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
    userByEmail(email: String!): User  
  }
`;

export default typeDefs;
