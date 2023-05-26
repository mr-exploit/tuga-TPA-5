'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        email: 'admin@gmail.com',
        password: 'Kucing12',
      },
      {
        username: 'raffi',
        email: 'raffi@gmail.com',
        password: 'kambing10',
      },
      {
        username: 'johncena',
        email: 'john@gmail.com',
        password: 'dhusnwk12',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
