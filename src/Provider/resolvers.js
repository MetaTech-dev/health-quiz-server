import { v4 as uuid } from "uuid";

let providersData = [
  {
    id: "5c899f28-73a4-4e69-a39e-6c5220be6bb0",
    name: "Weight Watchers",
    url: "https://www.weightwatchers.com/",
  },
];

const resolvers = {
  Query: {
    providers: () => providersData,
    provider: (_parent, { id }) =>
      providersData.find((provider) => provider.id === id),
  },
  Mutation: {
    createProvider: (_parent, { name, url }) => {
      const newProvider = {
        id: uuid(),
        name,
        url,
      };
      providersData.push(newProvider);
      return newProvider;
    },
    updateProvider: (_parent, { id, name, url }) => {
      const providerIndex = providersData.findIndex(
        (provider) => provider.id === id
      );
      if (name) {
        providersData[providerIndex].name = name;
      }
      if (url) {
        providersData[providerIndex].url = url;
      }
      return providersData[providerIndex];
    },
    deleteProvider: (_parent, { id }) => {
      providersData = providersData.filter((provider) => provider.id !== id);
      return "Success";
    },
  },
};

export default resolvers;
