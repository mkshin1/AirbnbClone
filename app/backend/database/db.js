import { Sequelize } from "sequelize";
import "dotenv/config";

// process.env.PASSWORD returns error : 'client password must be a string'

export const sequelize = new Sequelize(
  process.env.TEST_DATABASE,
  process.env.TEST_USERNAME,
  process.env.TEST_PASSWORD,
  {
    host: process.env.TEST_HOST,
    port: process.env.TEST_PORT,
    dialect: "postgres",
  }
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
