'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        autoNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        autoNull: false,
        type: Sequelize.STRING
      },
      author: {
        autoNull: false,
        type: Sequelize.STRING
      },
      pageQuantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        autoNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        autoNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Books');
  }
};
