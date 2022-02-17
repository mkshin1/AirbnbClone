const userModel = require("../models/users.js");
const amenitiesModel = require("../models/amenities.js");
const config = require("../config/config.json");
const { Sequelize, DataTypes } = require("sequelize");
const { underscoredIf } = require("sequelize/dist/lib/utils");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  null,
  {
    dialect: "postgres",
    host: config.development.host,
  }
);

// const amenities = async () => {
//   const data = await amenitiesModel(sequelize, DataTypes).create({
//     type: "wifi",
//   });
//   return data;
// };

// test("return a type of amenity that is labeled as wifi", async () => {
//   let data = await amenities();
//   expect(data.type).toBe("wifii");

// });

test("return the type of amentity for id 1", async () => {
  let data = await amenitiesModel(sequelize, DataTypes).findOne({
    where: {
      id: 1,
    },
  });

  expect(data.type).toBe("wifii");
});
