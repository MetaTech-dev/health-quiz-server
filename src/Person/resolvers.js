import { v4 as uuid } from "uuid";

let personsData = [
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
  Mutation: {
    createPerson: (_parent, { firstName, lastName }) => {
      const newPerson = {
        id: uuid(),
        firstName,
        lastName,
      };
      personsData.push(newPerson);
      console.log(personsData);
      return newPerson;
    },
    updatePerson: (_parent, { id, firstName, lastName }) => {
      const personIndex = personsData.findIndex((person) => person.id === id);
      if (firstName) {
        personsData[personIndex].firstName = firstName;
      }
      if (lastName) {
        personsData[personIndex].lastName = lastName;
      }
      return personsData[personIndex];
    },
    deletePerson: (_parent, { id }) => {
      personsData = personsData.filter((person) => person.id !== id);
      console.log(personsData);
      return "Success";
    },
  },
};

export default resolvers;
