const userModel = require("../models/users.js");
const bookingModel = require("../models/bookings.js");
const config = require("../config/config.json");
const { Sequelize, DataTypes } = require("sequelize");
const { underscoredIf } = require("sequelize/dist/lib/utils");
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

// const newBooking = async () => {
//   const result = await bookingModel(sequelize, DataTypes).create({
//     checkIn: new Date(),
//     checkOut: new Date(),
//     rate: 300.0,
//     listingId: 1,
//     userId: 1,
//   });
//   return result;
// };

// test("return booking by userId 1", async () => {
//   const data = await newBooking();
//   console.log(data);
//   expect(data.rate).toBe(300bo);
// });

test("return the userid by filtering booking id ", async () => {
  const data = await bookingModel(sequelize, DataTypes).findOne({
    where: { id: 1 },
  });
  expect(data.userId).toBe(1);
});

test("return the user info by filtering booking id ", async () => {
  const data = await bookingModel(sequelize, DataTypes).findOne({
    where: { id: 1 },
  });
  const user = await userModel(sequelize, DataTypes).findOne({
    where: { id: data.userId },
  });

  expect(user.firstName).toBe("michael");
});
