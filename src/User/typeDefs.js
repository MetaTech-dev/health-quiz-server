import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    person: Person
    personId: ID
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
    userByEmail(email: String!): User  
  }

  type Mutation {
    createUser (email: String!, password: String!): User
    updateUser (id: ID!, email: String, password: String, personId: ID): User
    deleteUser (id: ID!): String
  }
`;

export default typeDefs;
