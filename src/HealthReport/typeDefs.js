import { gql } from "apollo-server";

const typeDefs = gql`
  type HealthReport {
    id: ID!
    personId: ID
    bmi: Float
  }
  extend type Query {
    healthReports: [HealthReport]
    healthReport(id: ID, personId: ID): HealthReport
  }
`;

export default typeDefs;
