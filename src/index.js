import { ApolloServer } from 'apollo-server';
import jwt from 'jsonwebtoken';

import { typeDefs, resolvers } from './schema';
import dataSources from './dataSources';

require('dotenv').config();

const context = async ({ req }) => {
  let user;

  const { authorization } = req.headers;

  if (authorization) {
    const token = authorization.replace('Bearer ', '');

    // replace superSecretKey with env variable
    user = jwt.verify(token, process.env.JWT_SECRET);
  }

  return { user };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
