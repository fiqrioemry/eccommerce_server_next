"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      storeId: {
        type: Sequelize.INTEGER,
      },
      customerName: {
        type: Sequelize.STRING,
      },
      customerAddress: {
        type: Sequelize.TEXT,
      },
      totalPrice: {
        type: Sequelize.INTEGER,
      },
      shipmentCost: {
        type: Sequelize.INTEGER,
      },
      totalPay: {
        type: Sequelize.INTEGER,
      },

      orderStatus: {
        type: Sequelize.ENUM,
        values: ["pending", "shipped", "delivered", "cancelled"],
        defaultValue: "pending",
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
