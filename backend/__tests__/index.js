const userModel = require("../models/users.js");
const reviewModel = require("../models/reviews.js");
const config = require("../config/config.json");
const { Sequelize, DataTypes } = require("sequelize");
// const { jest } = require("@jest/globals");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  null,
  {
    dialect: "postgres",
    host: config.development.host,
  }
);
