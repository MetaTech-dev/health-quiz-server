import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { personsData } from '../Person/resolvers';
import { isValidEmail, isValidPassword } from '../utils';

let usersData = [
  {
    id: 'aff1e95b-1b6d-44df-babf-d0548e59cf27',
    email: 'test@fake-email.com',
    password: '$2a$10$T3NwukZ8rNDuXTiu.pqbveyx7EMBcipN1A30BcbagfTJeC5KItTmS',
    personId: '23048073-d8e0-4b40-bb6a-72c5a1198f0e',
  },
  {
    id: '37bede16-aa7d-43a2-a8a8-429db71a6019',
    email: 'another.test@fake-email.com',
    password: '$2a$10$/wRL0WgmMXW4XmRV35cxjuKykOFGRH4Nhy5XgyQcmaHb7h6dNc7DO',
    personId: '79c5a40e-011f-4d47-ab8b-2cb066acefe8',
  },
];

const resolvers = {
  Query: {
    async login(_parent, { email, password }, { dataSources }) {
      try {
        const user = await dataSources.User.get({ email });
        if (!user) {
          throw new Error('Unknown Email');
        }
        if (!isValidPassword(password, user.password)) {
          throw new Error('Incorrect password');
        }
        const token = jwt.sign(user, process.env.JWT_SECRET, {
          expiresIn: '1d',
        });
        return {
          token,
          user,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    users: () => usersData,
    user: (_parent, { id }) => usersData.find((user) => user.id === id),
    userByEmail: (_parent, { email }) => usersData.find((user) => user.email === email),
  },
  User: {
    person: (parent) => personsData.find((p) => p.id === parent.personId),
  },
  Mutation: {
    async createUser(_parent, { email, password }, { dataSources }) {
      try {
        if (!isValidEmail(email)) {
          throw new Error('Invalid Email');
        }
        const user = await dataSources.User.create({
          email,
          password: await bcrypt.hash(password, 10),
        });
        const token = jwt.sign(user, process.env.JWT_SECRET, {
          expiresIn: '1d',
        });
        return {
          token,
          user,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },

    updateUser: (_parent, { id, email, password, personId }) => {
      const userIndex = usersData.findIndex((user) => user.id === id);
      if (email) {
        usersData[userIndex].email = email;
      }
      if (password) {
        // TODO: Add encryption
        usersData[userIndex].password = password;
      }
      if (personId) {
        usersData[userIndex].personId = personId;
      }
      return usersData[userIndex];
    },
    deleteUser: (_parent, { id }) => {
      usersData = usersData.filter((user) => user.id !== id);
      return 'User Destroyed';
    },
  },
};

export default resolvers;
