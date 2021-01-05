import { gql } from "apollo-server";

const typeDefs = gql`
  type Person {
    id: ID!
    firstName: String
    lastName: String
  }

  extend type Query {
    persons: [Person]
    person(id: ID!): Person
  }
`;

export default typeDefs;
