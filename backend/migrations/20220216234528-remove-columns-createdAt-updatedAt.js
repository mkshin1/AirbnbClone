"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "createdAt");
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
