import { gql } from "apollo-server";
import { merge } from "lodash";

// typeDefs
import healthReportTypeDefs from "./HealthReport/typeDefs";
import personTypeDefs from "./Person/typeDefs";
import providerTypeDefs from "./Provider/typeDefs";
import userTypeDefs from "./User/typeDefs";

// resolvers
import healthReportResolvers from "./HealthReport/resolvers";
import personResolvers from "./Person/resolvers";
import providerResolvers from "./Provider/resolvers";
import userResolvers from "./User/resolvers";

// apollo-server only allows one type Query and type Mutation so our imported modules must extend that type
// and we need a root type Query to extend.
const rootTypeDef = gql`
  type Query {
    _rootQuery: String
  }
  type Mutation {
    _rootMutation: String
  }
`;

// every query and mutation must have a resolver
const rootResolver = {
  Query: {
    _rootQuery: () => "root query is only a placeholder",
  },
  Mutation: {
    _rootMutation: () => "root mutation is only a placeholder",
  },
};

// merge typeDefs
const typeDefs = [
  rootTypeDef,
  healthReportTypeDefs,
  personTypeDefs,
  providerTypeDefs,
  userTypeDefs,
];

// merge resolvers
const resolvers = merge(
  rootResolver,
  healthReportResolvers,
  personResolvers,
  providerResolvers,
  userResolvers,
);

// merge schema
const schema = {
  typeDefs,
  resolvers,
};

export default schema;
