"use strict";
const { Model } = require("DataTypes");
module.exports = (DataTypes, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    lasttName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    birthDay: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: DataTypes.DATEONLY,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  });
  return User;
};
