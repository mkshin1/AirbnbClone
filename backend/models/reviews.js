"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users);
    }
  }
  reviews.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      context: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reviewer_id: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: true,
        references: {
          model: "users",
          key: "id",
          as: "reviewer_id",
        },
      },
      reviewee_id: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: true,
        references: {
          model: "users",
          key: "id",
          as: "reviewee_id",
        },
      },
    },

    {
      sequelize,
      modelName: "reviews",
      timestamps: false,
    }
  );

  return reviews;
};
