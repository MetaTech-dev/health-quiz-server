import { ApolloServer, gql } from "apollo-server";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Person" type defines the queryable fields for every person in our data source.
  type Person {
    id: ID
    firstName: String
    lastName: String
  }

  type Provider {
    id: ID
    name: String
    url: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "persons" query returns an array of zero or more Persons (defined above).
  type Query {
    persons: [Person],
    provider: [Provider]
  }
`;

// This is some static practice data for now. Later we will hook our server up to a database.
const persons = [
  {
    id: "23048073-d8e0-4b40-bb6a-72c5a1198f0e",
    firstName: "Austen",
    lastName: "Mack",
  },
  {
    id: "79c5a40e-011f-4d47-ab8b-2cb066acefe8",
    firstName: "Matthew",
    lastName: "Whitney",
  },
  {
    id: "de9bf283-5626-48fe-87ca-688cbc381f30",
    firstName: "Marek",
    lastName: "Lubomirski",
  },
];

const healthReports = [
  {
    id: "1d20d68d-e07a-43d0-9a8d-8b7a5ac5ec3e",
    userId: "23048073-d8e0-4b40-bb6a-72c5a1198f0e",
    bmi: 28.6,
  },
  {
    id: "e384e572-646c-487a-b5f7-c0b37653ae51",
    userId: "79c5a40e-011f-4d47-ab8b-2cb066acefe8",
    bmi: 28.6,
  },
  {
    id: "7aa9a777-4842-4078-834b-a80ceb981eb2",
    userId: "de9bf283-5626-48fe-87ca-688cbc381f30",
    bmi: 28.6,
  },
];

const providers = [
  {
    id: "5c899f28-73a4-4e69-a39e-6c5220be6bb0",
    name: "Weight Watchers",
    url: "https://www.weightwatchers.com/",
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves persons from the "persons" array above.
const resolvers = {
  Query: {
    persons: () => persons,
    provider: () => Provider,
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
