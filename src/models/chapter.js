"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    static associate(models) {
      // Define associations here
      // Example:
      // Chapter.belongsTo(models.Subject, { foreignKey: 'subjectId' });
      // Chapter.hasMany(models.SubChapter, { foreignKey: 'chapterId' });
      Chapter.belongsTo(models.Subject, {
        foreignKey: 'subjectId',
        as: 'subject'
      });

      // Chapter has many SubChapters
      Chapter.hasMany(models.SubChapter, {
        foreignKey: 'chapterId',
        as: 'subChapters'
      });
    }
  }
  Chapter.init(
    {
      name: DataTypes.STRING,
      subjectId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Chapter",
    }
  );
  return Chapter;
};
