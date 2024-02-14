'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bookings', [
      {
        userId: 1,
        hotelId: 1,
        roomId: 1,
        startDate: new Date('2024-02-15'),
        endDate: new Date('2024-02-20'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        hotelId: 1,
        roomId: 2,
        startDate: new Date('2024-02-14'),
        endDate: new Date('2024-02-18'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bookings', null, {});
  }
};
