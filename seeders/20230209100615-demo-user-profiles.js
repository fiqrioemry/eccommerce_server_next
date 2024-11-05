"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert users and get the inserted user IDs
    await queryInterface.bulkInsert(
      "UserProfiles",
      [
        {
          userId: 1,
          name: "admin 01",
          address: "somewhere in the earth",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "customer 01",
          address: "somewhere in the earth",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "seller 01",
          address: "somewhere in the earth",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true } // This option returns the inserted rows with IDs
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserProfiles", null, {});
  },
};
