'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books',
    [
      {
        title: "Senhor dos Anel",
        author: "Tolkien",
        pageQuantity: 200,
      },
      {
        title: "Sim senhor",
        author: "Jim carrey",
        pageQuantity: 20,
      },
    ], {})
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  }
};
