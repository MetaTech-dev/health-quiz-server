import { gql } from "apollo-server";

const typeDefs = gql`
  type Person {
    id: ID!
    firstName: String!
    lastName: String!
  }

  extend type Query {
    persons: [Person]
    person(id: ID!): Person
  }

  type Mutation {
    createPerson(firstName: String!, lastName: String!): Person
    updatePerson(id: ID!, firstName: String, lastName: String): Person
    deletePerson(id: ID!): String
  }
`;

export default typeDefs;
