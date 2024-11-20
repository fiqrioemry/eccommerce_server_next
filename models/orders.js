"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Stores, { foreignKey: "storeId" });
      this.belongsTo(models.Users, { foreignKey: "userId" });
      this.hasMany(models.OrderDetails, { foreignKey: "orderId" });
    }
  }
  Orders.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: DataTypes.INTEGER,
      storeId: DataTypes.INTEGER,
      customerName: DataTypes.STRING,
      customerAddress: DataTypes.TEXT,
      totalPrice: DataTypes.INTEGER,
      shipmentCost: DataTypes.INTEGER,
      totalPay: DataTypes.INTEGER,
      orderStatus: {
        type: DataTypes.ENUM,
        values: ["pending", "challange", "failed", "success"],
        defaultValue: "pending",
      },
      shipmentStatus: {
        type: DataTypes.ENUM,
        values: [
          "waiting_payment",
          "waiting_seller",
          "processing",
          "shipped",
          "delivered",
          "cancelled",
        ],
        defaultValue: "waiting_payment",
      },
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
