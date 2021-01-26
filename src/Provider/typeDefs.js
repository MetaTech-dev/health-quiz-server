import { gql } from 'apollo-server';

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

  extend type Mutation {
    createProvider(name: String, url: String): Provider
    updateProvider(id: ID!, name: String, url: String): Provider
    deleteProvider(id: ID!): String
  }
`;

export default typeDefs;
