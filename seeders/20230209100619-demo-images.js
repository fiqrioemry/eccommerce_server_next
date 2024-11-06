"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        // Loop over 50 products with 2 entries for each productId
        ...Array.from({ length: 50 }).flatMap((_, i) => [
          {
            // First entry for product i+1
            productId: i + 1,
            image: `https://res.cloudinary.com/dnlrzhdcs/image/upload/v1730829466/images/hp4_1730829463838.webp`,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            // Second entry for product i+1
            productId: i + 1,
            image: `https://res.cloudinary.com/dnlrzhdcs/image/upload/v1730829466/images/hp4_1730829463838.webp`,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]),
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
