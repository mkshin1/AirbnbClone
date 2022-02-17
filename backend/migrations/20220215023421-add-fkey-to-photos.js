"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("photos", {
      fields: ["listingId"],
      type: "foreign key",
      // name: 'custom_fkey_constraint_name', // optional
      references: {
        table: "listings",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("photos", "listingId", {
      fields: ["listingId"],
      type: "foreign key",
      // name: 'custom_fkey_constraint_name', // optional
      references: {
        table: "listings",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
};
