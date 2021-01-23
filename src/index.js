import { ApolloServer } from "apollo-server";
import schema from "./schema";
import createStore from "./store";
import UserAPI from "./User/dataSource";
import isEmail from "isemail";

// creates a sequelize connection.
const store = createStore();

const dataSources = () => ({
  userAPI: new UserAPI({ store }),
});

const context = async ({ req }) => {
  // simple auth check on every request
  const auth = (req.headers && req.headers.authorization) || "";
  const email = Buffer.from(auth, "base64").toString("ascii");

  // if the email isn't formatted validly, return null for user
  if (!isEmail.validate(email)) return { user: null };
  // find a user by their email
  const users = await store.users.findOrCreate({ where: { email } });
  const user = users && users[0] ? users[0] : null;

  return { user };
};

const server = new ApolloServer({
  ...schema,
  dataSources,
  context,
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
