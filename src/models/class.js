"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      // Define associations here
      // Example:
      // Class.hasMany(models.Subject, { foreignKey: 'classId' });
      Class.hasMany(models.Subject, {
        foreignKey: 'classId',
        as: 'subjects'
      });
    }
  }
  Class.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Class",
    }
  );
  return Class;
};
