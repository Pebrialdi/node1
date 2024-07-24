"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SubChapter extends Model {
    static associate(models) {
      // Define associations here
      // Example:
      // SubChapter.belongsTo(models.Chapter, { foreignKey: 'chapterId' });
      // SubChapter.hasMany(models.Material, { foreignKey: 'subChapterId' });
      SubChapter.belongsTo(models.Chapter, {
        foreignKey: 'chapterId',
        as: 'chapter'
      });

      // SubChapter has many Materials
      SubChapter.hasMany(models.Material, {
        foreignKey: 'subChapterId',
        as: 'materials'
      });
    }
  }
  SubChapter.init(
    {
      name: DataTypes.STRING,
      chapterId: DataTypes.INTEGER,
      isFree: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "SubChapter",
    }
  );
  return SubChapter;
};
