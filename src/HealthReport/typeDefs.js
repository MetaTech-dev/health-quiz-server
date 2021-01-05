import { gql } from "apollo-server";

const typeDefs = gql`
  type HealthReport {
    id: ID
    userId: ID
    bmi: Float
  }
  extend type Query {
    healthReports: [HealthReport]
  }
`;

export default typeDefs;
