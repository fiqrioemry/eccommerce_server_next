"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, { foreignKey: "userId" });
      this.hasMany(models.Products, { foreignKey: "storeId" });
      this.hasMany(models.Orders, { foreignKey: "storeId" });
    }
  }
  Stores.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: DataTypes.INTEGER,
      storeName: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.TEXT,
      city: DataTypes.STRING,
      balance: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Stores",
    }
  );
  return Stores;
};
