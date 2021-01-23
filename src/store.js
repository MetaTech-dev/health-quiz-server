import { Sequelize } from "sequelize";

export const createStore = () => {
  const db = new Sequelize({
    dialect: "sqlite",
    storage: "./store.sqlite",
  });

  const users = db.define("user", {
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  });

  return { db, users };
};
