import { personsData } from "../Person/resolvers"
const usersData =
  [
    {
      id: "aff1e95b-1b6d-44df-babf-d0548e59cf27",
      email: 'test@fake-email.com',
      password: "$2a$10$T3NwukZ8rNDuXTiu.pqbveyx7EMBcipN1A30BcbagfTJeC5KItTmS",
      personId: "23048073-d8e0-4b40-bb6a-72c5a1198f0e",
    },
    {
      id: "37bede16-aa7d-43a2-a8a8-429db71a6019",
      email: 'another.test@fake-email.com',
      password: "$2a$10$/wRL0WgmMXW4XmRV35cxjuKykOFGRH4Nhy5XgyQcmaHb7h6dNc7DO",
      personId: "79c5a40e-011f-4d47-ab8b-2cb066acefe8",
    },
  ]



const resolvers = {
  Query: {
    users: () => usersData,
    user: (_parent, { id }) => usersData.find((user) => user.id === id),
    userByEmail: (_parent, { email }) => usersData.find((user) => user.email === email)
  },
  User: {
    userPerson: (parent) => personsData.find((p) => p.id === parent.personId),
  },

};

export default resolvers;
