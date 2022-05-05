"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      nickName: DataTypes.STRING,
      fullName: DataTypes.STRING,
      b_day: DataTypes.DATE,
      id_doc: DataTypes.STRING,
      tell: DataTypes.STRING,
      cell: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      placeOfBirth: DataTypes.DATE,
      photo: DataTypes.STRING,
      e_mail: DataTypes.STRING,
      instagram: DataTypes.STRING,
      gitHub: DataTypes.STRING,
      linkedIn: DataTypes.STRING,
      civil_status: DataTypes.STRING,
      ruc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
