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

  type Mutation {
    createHealthReport(personId: ID!, bmi: Float): HealthReport
    updateHealthReport(personId: ID!, bmi: Float): HealthReport
    deleteHealthReport(id: ID!): String
  }
`;

export default typeDefs;
