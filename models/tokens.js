"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // define association here
      this.belongsTo(models.Users, { as: "Users" });
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
      userId: DataTypes.INTEGER,
      refreshToken: DataTypes.TEXT,
      accessToken: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Tokens",
    }
  );
  return Tokens;
};
