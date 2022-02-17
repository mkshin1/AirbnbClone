"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("amenities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("amenities");
  },
};
