'use strict';
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('Chapters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      subjectId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Subjects',
          key: 'id',
        },  
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('Chapters');
  },
};
