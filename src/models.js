import Sequelize from 'sequelize';
import UserModel from './User/model';

const models = () => {
  const db = new Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'sqlite',
    storage: './database.sqlite',
  });

  const Users = db.define('User', UserModel);

  return { Users };
};

export default models;
