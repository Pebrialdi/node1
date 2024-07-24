"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class LearningMode extends Model {
    static associate(models) {
      // Define associations here
      // Example:
      // LearningMode.hasMany(models.Subject, { foreignKey: 'learningModeId' });
      LearningMode.hasMany(models.Subject, {
        foreignKey: 'learningModeId',
        as: 'subjects'
      });

    }
  }
  LearningMode.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "LearningMode",
    }
  );
  return LearningMode;
};
