import { gql } from 'apollo-server';

const typeDefs = gql`
  type Goal {
    id: ID!
    title: String
  }

  extend type Query {
    goals: [Goal]
    goal(id: ID!): Goal
  }

  extend type Mutation {
    createGoal(title: String!): Goal
    updateGoal(id: ID!, title: String): Goal
    deleteGoal(id: ID!): String
  }
`;

export default typeDefs;
