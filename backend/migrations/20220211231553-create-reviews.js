"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        // references: { model: "users", key: "id" },
      },
      context: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "",
      },
      reviewer_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      reviewee_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("reviews");
    // await queryInterface.removeColumn("reviews", "reviewer_id");
    // await queryInterface.removeColumn("reviews", "reviewee_id");
  },
};
