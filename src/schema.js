import { gql } from 'apollo-server';
import { merge } from 'lodash';

// typeDefs
import healthReportTypeDefs from './HealthReport/typeDefs';
import personTypeDefs from './Person/typeDefs';
import providerTypeDefs from './Provider/typeDefs';
import userTypeDefs from './User/typeDefs';
import goalTypeDefs from './Goal/typeDefs';

// resolvers
import healthReportResolvers from './HealthReport/resolvers';
import personResolvers from './Person/resolvers';
import providerResolvers from './Provider/resolvers';
import userResolvers from './User/resolvers';
import goalResolvers from './Goal/resolvers';

// GraphQL only allows one type Query and one type Mutation
// so there must be a root Query and Mutation for our imported modules to extend
const rootTypeDef = gql`
  type Query {
    _rootQuery: String
  }
  type Mutation {
    _rootMutation: String
  }
`;

// and every query and mutation must have a resolver, even if it will never be used
const rootResolver = {
  Query: {
    _rootQuery: () => 'root query is only a placeholder',
  },
  Mutation: {
    _rootMutation: () => 'root mutation is only a placeholder',
  },
};

// merge and export typeDefs
export const typeDefs = [
  rootTypeDef,
  healthReportTypeDefs,
  personTypeDefs,
  providerTypeDefs,
  userTypeDefs,
  goalTypeDefs,
];

// merge and export resolvers
export const resolvers = merge(
  rootResolver,
  healthReportResolvers,
  personResolvers,
  providerResolvers,
  userResolvers,
  goalResolvers
);
