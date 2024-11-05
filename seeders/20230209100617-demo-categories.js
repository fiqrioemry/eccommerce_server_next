"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert users and get the inserted user IDs
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Electronics",
          image:
            "https://cf.shopee.co.id/file/dcd61dcb7c1448a132f49f938b0cb553_tn",
          slug: "electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {} // This option returns the inserted rows with IDs
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
