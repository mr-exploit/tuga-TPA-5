'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todo', [
      {
        judul: 'nutrisi',
        konten: 'Kenali nutrisi apa saja yang harus dipenuhi untuk kebutuhan anak bayi',
        kategori_id : 2,
      },
      {
        judul: 'alergi',
        konten: 'Segala informasi penting seputar serba-serbi alergi dan perawatan untuk mengatasi gejala alergi',
        kategori_id : 1,
      },
      {
        judul: 'Kesehatan',
        konten: 'Ketahui cara menjaga dan mengoptimalkan tumbuh kembang si Keci',
        kategori_id : 3,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todo', null, {});
  }
};
