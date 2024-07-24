"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    static associate(models) {
      // Define associations here
      // Example:
      // Subject.belongsTo(models.Class, { foreignKey: 'classId' });
      // Subject.belongsTo(models.LearningMode, { foreignKey: 'learningModeId' });
      // Subject.hasMany(models.Chapter, { foreignKey: 'subjectId' });
        // Subject belongs to Class
        Subject.belongsTo(models.Class, {
          foreignKey: 'classId',
          as: 'class'
        });
  
        // Subject belongs to LearningMode
        Subject.belongsTo(models.LearningMode, {
          foreignKey: 'learningModeId',
          as: 'learningMode'
        });
  
        // Subject has many Chapters
        Subject.hasMany(models.Chapter, {
          foreignKey: 'subjectId',
          as: 'chapters'
        });
  
    }
  }
  Subject.init(
    {
      name: DataTypes.STRING,
      classId: DataTypes.INTEGER,
      learningModeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Subject",
    }
  );
  return Subject;
};
