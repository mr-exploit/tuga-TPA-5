'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('kategori', [
      {
        nama: 'nutrisi',
        deskripsi: 'Kenali nutrisi apa saja yang harus dipenuhi untuk kebutuhan anak bayi',
      },
      {
        nama: 'alergi',
        deskripsi: 'Segala informasi penting seputar serba-serbi alergi dan perawatan untuk mengatasi gejala alergi',
      },
      {
        nama: 'Kesehatan',
        deskripsi: 'Ketahui cara menjaga dan mengoptimalkan tumbuh kembang si Keci',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('kategori', null, {});
  }
};
