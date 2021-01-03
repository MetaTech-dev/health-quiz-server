import { ApolloServer, gql } from "apollo-server";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Person" type defines the queryable fields for every person in our data source.
  type Person {
    firstName: String
    lastName: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "persons" query returns an array of zero or more Persons (defined above).
  type Query {
    persons: [Person]
  }
`;

// This is some static practice data for now. Later we will hook our server up to a database.
const persons = [
  {
    firstName: "Austen",
    lastName: "Mack",
  },
  {
    firstName: "Matthew",
    lastName: "Whitney",
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves persons from the "persons" array above.
const resolvers = {
  Query: {
    persons: () => persons,
  },
};

// The ApolloServer constructor requires two parameters: your schema definition
// and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}.
  RIP DOOM AND OUR GRANDMAS!`);
});
