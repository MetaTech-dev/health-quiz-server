const personsData = [
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

const resolvers = {
  Query: {
    persons: () => personsData,
    person: (_parent, { id }) => personsData.find((person) => person.id === id),
  },
};

export default resolvers;
