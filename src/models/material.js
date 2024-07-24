"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate(models) {
      // Define associations here
      // Example:
      // Material.belongsTo(models.SubChapter, { foreignKey: 'subChapterId' });
      Material.belongsTo(models.SubChapter, {
        foreignKey: 'subChapterId',
        as: 'subChapter'
      });
    }
  }
  Material.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      xp: DataTypes.INTEGER,
      gold: DataTypes.INTEGER,
      subChapterId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Material",
    }
  );
  return Material;
};
