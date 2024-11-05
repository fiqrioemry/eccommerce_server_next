"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert users and get the inserted user IDs
    await queryInterface.bulkInsert(
      "Stores",
      [
        {
          userId: 3,
          storeName: "Erafone electronic",
          description: "menjual alat elektronik lengkap",
          image:
            "https://res.cloudinary.com/dqcaa6hws/image/upload/v1679580381/images/vm0xbvnnk5tqrmyk5yjk.png",
          city: "jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {} // This option returns the inserted rows with IDs
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Stores", null, {});
  },
};
