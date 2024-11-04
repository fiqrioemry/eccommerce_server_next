"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.UserRoles, { foreignKey: "roleId" });
      this.hasOne(models.UserProfiles);
      this.hasOne(models.Tokens);
      this.hasOne(models.Stores, { foreignKey: "userId" });
      this.hasMany(models.Reviews);
      this.hasMany(models.Orders);
      this.hasMany(models.Carts);
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: DataTypes.STRING,
      password: DataTypes.TEXT,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
