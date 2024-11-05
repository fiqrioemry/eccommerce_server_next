"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResetTokens extends Model {
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: "userId", as: "Users" }); // Pastikan menggunakan
    }
  }
  ResetTokens.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: DataTypes.INTEGER,
      resetToken: DataTypes.STRING,
      expiresAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ResetTokens",
    }
  );
  return ResetTokens;
};
