import { gql } from "apollo-server";

const typeDefs = gql`
  type HealthReport {
    id: ID!
    personId: ID
    bmi: Float
  }
  extend type Query {
    healthReports: [HealthReport]
    healthReportById(id: ID!): HealthReport
    healthReportByPersonId(personId: ID!): HealthReport
  }
`;

export default typeDefs;
