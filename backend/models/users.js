"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.reviews);
      this.hasMany(models.bookings);
      this.hasMany(models.listings);
    }
  }
  users.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        unique: true,
      },
      birthDay: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
    },

    {
      sequelize,
      modelName: "users",
      timestamps: false,
    }
  );
  return users;
};
