"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("listings", {
      fields: ["userId"],
      type: "foreign key",
      // name: 'custom_fkey_constraint_name', // optional
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("photos", "userId", {
      fields: ["userId"],
      type: "foreign key",
      // name: 'custom_fkey_constraint_name', // optional
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
};
