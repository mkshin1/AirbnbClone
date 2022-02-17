"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users);
      this.belongsTo(models.listings);
    }
  }
  bookings.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      checkIn: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      checkOut: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      rate: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      listingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "listings",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        defaultValue: 1,
        references: {
          model: "users",
          key: "id",
        },
      },
    },

    {
      sequelize,
      modelName: "bookings",
      timestamps: false,
    }
  );

  return bookings;
};
