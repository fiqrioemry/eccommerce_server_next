"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashPassword = await bcrypt.hash("12345", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "admin01@gmail.com",
          password: hashPassword,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "customer01@gmail.com",
          password: hashPassword,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "seller01@gmail.com",
          password: hashPassword,
          roleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
