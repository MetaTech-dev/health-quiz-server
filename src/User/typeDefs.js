import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    person: Person
    personId: ID
  }

  type LoggedInUser {
    token: String
    user: User
  }

  extend type Query {
    login(email: String, password: String): LoggedInUser
    users: [User]
    user(id: ID!): User
    userByEmail(email: String!): User
  }

  extend type Mutation {
    createUser(email: String!, password: String!): LoggedInUser
    updateUser(id: ID!, email: String, password: String, personId: ID): User
    deleteUser(id: ID!): String
  }
`;

export default typeDefs;
