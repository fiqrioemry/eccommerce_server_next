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
      this.belongsTo(models.Stores, { as: "Stores" });
      this.belongsTo(models.Users, { as: "Users" });
      this.hasMany(models.OrderDetails);
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
        values: ["pending", "shipped", "delivered", "cancelled"],
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
