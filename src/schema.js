import { gql } from "apollo-server";
import { merge } from "lodash";

// typeDefs
import healthReportTypeDefs from "./HealthReport/typeDefs";
import personTypeDefs from "./Person/typeDefs";
import providerTypeDefs from "./Provider/typeDefs";

// resolvers
import healthReportResolvers from "./HealthReport/resolvers";
import personResolvers from "./Person/resolvers";
import providerResolvers from "./Provider/resolvers";

// apollo-server only allows one type Query so our imported modules must extend that type
// and we need a root type Query to extend.
const rootTypeDef = gql`
  type Query {
    _root: String
  }
`;

// every query must have a resolver
const rootResolver = {
  Query: {
    _root: () => "root query is only a placeholder",
  },
};

// merge typeDefs
const typeDefs = [
  rootTypeDef,
  healthReportTypeDefs,
  personTypeDefs,
  providerTypeDefs,
];

// merge resolvers
const resolvers = merge(
  rootResolver,
  healthReportResolvers,
  personResolvers,
  providerResolvers
);

// merge schema
const schema = {
  typeDefs,
  resolvers,
};

export default schema;
