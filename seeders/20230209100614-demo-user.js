"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashPassword = await bcrypt.hash("12345", 10);

    const users = [];

    // Add sellers (seller01 - seller10)
    for (let i = 1; i <= 10; i++) {
      users.push({
        email: `seller${String(i).padStart(2, "0")}@gmail.com`,
        password: hashPassword,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Add customers (customer01 - customer05)
    for (let i = 1; i <= 5; i++) {
      users.push({
        email: `customer${String(i).padStart(2, "0")}@gmail.com`,
        password: hashPassword,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Add admin at the 16th position
    users.push({
      email: "admin01@gmail.com",
      password: hashPassword,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
