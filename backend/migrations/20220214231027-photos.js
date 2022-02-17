"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("photos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      listingId: {
        type: Sequelize.INTEGER,
        // // allowNull: false,
        // // onDelete: "CASCADE",
        // // onUpdate: "CASCADE",
        // // references: {
        // //   model: "listings",
        // //   key: "id",
        // // },
      },
      s3_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("photos");
  },
};
