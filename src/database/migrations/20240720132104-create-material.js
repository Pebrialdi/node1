'use strict';
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('Materials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      xp: {
        type: Sequelize.INTEGER,
      },
      gold: {
        type: Sequelize.INTEGER,
      },
      subChapterId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'SubChapters',
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
    await queryInterface.dropTable('Materials');
  },
};
