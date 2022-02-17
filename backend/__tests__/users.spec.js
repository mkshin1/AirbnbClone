const userModel = require("../models/users.js");
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

test("return first name ", async () => {
  let newUser = await userModel(sequelize, DataTypes).create({
    firstName: "Mike",
    lastName: "Shin",
    age: 22,
    email: "mshin213@gmail.com",
    birthDay: "11221993",
    phoneNumber: "2136634270",
  });
  expect(newUser.firstName).toBe("David");
});

test("return first name ", async () => {
  let newUser = await userModel(sequelize, DataTypes).create({
    firstName: "Lisa",
    lastName: "Shin",
    age: 22,
    email: "lshin1993@gmail.com",
    birthDay: "11221993",
    phoneNumber: "2136634290",
  });
  expect(newUser.firstName).toBe("David");
});

// test("return the quantity of people of age 32", async () => {
//   let data = await userModel(sequelize, DataTypes).findAll({
//     where: {
//       age: 32,
//     },
//   });
// data.forEach((person) => console.log(person.dataValues.firstName));

// expect(data.length).toBe(0);
// });

// test("return the person with the birthday of 11061989", async () => {
//   let data = await userModel(sequelize, DataTypes).findOne({
//     where: {
//       birthDay: "11061989",
//     },
//   });

//   expect(data.firstName).toBe("Lisa");
// });

// mock jest functions
// test out behavior of db

// describe("get user info", () => {
//   const mockDB = jest.fn(() => ({ firstName: "Michael", lastName: "Shin" }));

//   test("return true if user name exists", () => {
//     let result = mockDB();
//     console.log(result);
//     expect(result.firstName).toEqual("Michael");
//     expect(mockDB.mock.calls.length).toBe(1);
//     expect(result).toEqual({ firstName: "Michael", lastName: "Shin" });
//   });

//   test("return the corrsponding users phone number using id", async () => {
//     const mockDB = jest.fn(() => ({ id: 1 }));

//     let result = mockDB();

//     let dbQuery = await userModel(sequelize, DataTypes).findOne({
//       where: {
//         id: result.id,
//       },
//     });
//     expect(dbQuery.phoneNumber).toBe("2139803939");
//   });

//   test("return a list of users first name that are age 32", async () => {
//     const names = ["Kevin", "Lisa", "Josh"];
//     let dbQuery = await userModel(sequelize, DataTypes).findAll({
//       where: {
//         age: 32,
//       },
//     });

//     console.log(dbQuery, "*******************");
//     const matchedNames = [];
//     dbQuery.forEach((person) => {
//       if (person.age === 32) matchedNames.push(person.firstName);
//     });

//     // expect(matchedNames).toEqual(names);
//     expect(matchedNames.length).toEqual(0);
//   });
// });
