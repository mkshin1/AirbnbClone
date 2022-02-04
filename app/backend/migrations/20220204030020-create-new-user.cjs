"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      lasttName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      birthDay: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: Sequelize.DATEONLY,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("users");
  },
};
