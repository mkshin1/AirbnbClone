// a single module where sequelize can be used
// connect to db, make models, query the db using models, assoicaitons, snyc, and migrations

import { Sequelize, DataTypes } from "sequelize";
import "dotenv/config";

// connect to my postgres database

export const sequelize = new Sequelize("michaelshin", "michaelshin", "", {
  host: "localhost",
  dialect: "postgres",
});

try {
  await sequelize.authenticate();
  console.log("ok");
} catch (error) {
  console.error(error, "bad");
}

// create models using sequelize.define
const User = sequelize.define(
  "user",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,

      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
console.log(User === sequelize.models.User); // true

const Photo = sequelize.define(
  "photo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    s3_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
console.log(Photo === sequelize.models.Photo); // true

try {
  await sequelize.sync({ force: true });
  console.log("succuessfully created the table using the User model in the db");
} catch (error) {
  console.error(error, "User model did not sync with user table in db");
}

// after creating models, create rows of data, or in other words, create instances of the User type and the
// Photo type and make the data persist in the database.
// do all of this in javascript land

const jane = await User.create({ firstName: "Jane", lastName: "kim" });
// Jane exists in the database now!
console.log(jane instanceof User); // true
console.log(jane.firstName); // "Jane"
jane.save();

const joon = await User.create({ firstName: "Joon", lastName: "Kang" });
// Jane exists in the database now!
console.log(joon instanceof User); // true
console.log(joon.firstName); //
joon.save();

const john = User.build({ firstName: "john", lastName: "yoon" });
console.log(john instanceof User); // true
console.log(john.firstName); //

await john.save();

await jane.update({ firstName: "Ada" });

await jane.save();

john.set({
  firstName: "jonny",
});

await john.save();

console.log("Jane's auto-generated ID:", jane.id);

const users = await User.findAll();
console.log(users.every((user) => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));

const firstNames = await User.findAll({
  attributes: ["firstName"],
});

console.log("firstnames", JSON.stringify(firstNames, null, 2));

const lastNames = await User.findAll({
  attributes: { exclude: ["firstName"] },
});

console.log("lastnames", JSON.stringify(lastNames, null, 2));
