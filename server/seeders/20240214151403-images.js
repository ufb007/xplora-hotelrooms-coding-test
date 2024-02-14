'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('images', [
      {
        roomId: 1,
        src: '/files/images/rooms/0fe7e400.png'
      },
      {
        roomId: 1,
        src: '/files/images/rooms/b0c867dc.png'
      },
      {
        roomId: 1,
        src: '/files/images/rooms/db1cc8ff.png'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('images', null, {});
  }
};
