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

// test("creating a reveiw", async () => {
//   let result = await reviewModel(sequelize, DataTypes).create({
//     context: "random tester context review!",
//     reviewer_id: 2,
//     reviewee_id: 5,
//   });
//   expect(result.reviewer_id).toBe(2);
// });

// test("deleting user -> delete related reviews with user id", async () => {
//   let result = await userModel(sequelize, DataTypes).destroy({
//     where: {
//       id: 3,
//     },
//   });

//   expect(result).toBe(3);
// });

test("s3_url column should populate in db", async () => {
  let result = await reviewModel(sequelize, DataTypes).create({
    context: "random string of text",
    reviewer_id: 1,
    reviewee_id: 2,
    s3_url: "https://www.google.com/images/1",
  });

  expect(result.s3_url).toBe("https://www.google.com/images");
});
