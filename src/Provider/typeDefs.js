import { gql } from "apollo-server";

const typeDefs = gql`
  type Provider {
    id: ID!
    name: String
    url: String
  }

  extend type Query {
    providers: [Provider]
  }
`;

export default typeDefs;