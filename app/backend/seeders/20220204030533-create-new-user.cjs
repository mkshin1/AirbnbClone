"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Michael",
          lasttName: "Shin",
          password: "1243",
          phoneNumber: "2136634269",
          birthDay: 11221993,
          email: "michaelshin.115@gmail.com",
          age: 28,
        },
        {
          firstName: "Lisa",
          lasttName: "Shin",
          password: "12435",
          phoneNumber: "2136634270",
          birthDay: 11061989,
          email: "lisashin1989@gmail.com",
          age: 32,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
