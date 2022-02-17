// how to tset listings model
// create a mock
// try injecting into db in js land
// make sure the fkeys are working when doing crud operations
const userModel = require("../models/users.js");
const listingModel = require("../models/listings.js");
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

const newListing = async () => {
  const result = await listingModel(sequelize, DataTypes).create({
    desc: "random description of fake listing number 3",
    streetName: "115 S Berendo St",
    city: "Los Angeles",
    zipCode: 90004,
    state: "CA",
    rate: 300.0,
    date: "02152022",
    userId: 1,
  });
  return result;
};
const mockFunc = jest.fn(() => {
  const result = {
    desc: "random description of fake listing number 2",
    streetName: "115 S Berendo St",
    city: "Los Angeles",
    zipCode: 90004,
    state: "CA",
    rate: 300.0,
    date: "02152022",
    userId: 1,
  };
  return result;
});
beforeAll(async () => {
  // const result = await newListing();
  return await mockFunc();
});
describe("test suite for creating new data for listings", () => {
  test("return the description of new listing", async () => {
    const result = await mockFunc();
    expect(result.desc).toBe("this is totally wrong");
  });
  test("return the city  of new listing", async () => {
    const result = await mockFunc();
    expect(result.city).toBe("LA");
  });
});

test("find the listing by user id", async () => {
  let data = await listingModel(sequelize, DataTypes).findOne({
    where: { id: 1, state: "CA" },
  });
  console.log(data);

  // expect(data.id).toBe(1);
  expect(data.state).toBe("CA");
});

test("find the user by the user id in the listing", async () => {
  let user = await listingModel(sequelize, DataTypes).findOne({
    where: { id: 1, state: "CA" },
  });
  let data = await userModel(sequelize, DataTypes).findOne({
    where: { id: user.id },
  });
  // expect(data.id).toBe(2);
  console.log(data.dataValues);
  expect(data.dataValues.firstName).toBe("michael");
});

// use async mock functions
// use mock functions

// test("return the user id and the description of the listing", async () => {
//   const data = await newListing();
//   console.log(data);
//   expect(data.userId).toBe(1);
//   expect(data.desc).toBe("something that is completely wrong");
// });
