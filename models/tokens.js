"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tokens extends Model {
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: "userId" }); // Pastikan menggunakan foreignKey 'userId'
    }
  }

  Tokens.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      refreshToken: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Tokens",
    }
  );

  return Tokens;
};
