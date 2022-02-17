// model for the amenities table
// should be the newest file added that will show in the branch

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class amenities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  amenities.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
      },
    },

    {
      sequelize,
      modelName: "amenities",
      timestamps: false,
    }
  );

  return amenities;
};
