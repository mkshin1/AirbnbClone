import { Sequelize } from "sequelize";
import "dotenv/config";

// process.env.PASSWORD returns error : 'client password must be a string'
console.log(process.env);
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "postgres",
  }
);

try {
  await sequelize.authenticate();
  console.log("connection has been established successfully");
} catch (error) {
  console.error("unable to connect to the database", error);
}
