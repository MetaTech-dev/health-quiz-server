const providersData = [
  {
    id: "5c899f28-73a4-4e69-a39e-6c5220be6bb0",
    name: "Weight Watchers",
    url: "https://www.weightwatchers.com/",
  },
];

const resolvers = {
  Query: {
    providers: () => providersData,
    provider: (_parent, { id }) => providersData.find((provider) => provider.id === id),
  },
};

export default resolvers;
