import { gql } from "apollo-server";

const typeDefs = gql`
  type Provider {
    id: ID!
    name: String
    url: String
  }

  extend type Query {
    providers: [Provider]
    provider(id: ID!): Provider
  }
  
  type Mutation {
    createProvider(id: ID!): Provider
    updateProvider(id: ID!): Provider
    deleteProvider(id: ID!): String
  }
`;

export default typeDefs;
