import { gql } from "apollo-server";

const typeDefs = gql`
  type HealthReport {
    id: ID!
    personId: ID
    bmi: Float
  }
  extend type Query {
    healthReports: [HealthReport]
  }
`;

export default typeDefs;
