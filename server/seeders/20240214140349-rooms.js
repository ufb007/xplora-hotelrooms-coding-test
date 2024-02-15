'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rooms', [
      {
        hotelId: 1,
        title: 'Suite 1',
        image: '/files/images/rooms/0fe7e400.png',
        singleBed: 0,
        doubleBed: 1,
        wifi: '1',
        tv: '1'
      },
      {
        hotelId: 1,
        title: 'Suite 2',
        image: '/files/images/rooms/0fe7e400.png',
        singleBed: 2,
        doubleBed: 0,
        wifi: '1',
        tv: '1'
      },
      {
        hotelId: 1,
        title: 'Suite 3',
        image: '/files/images/rooms/0fe7e400.png',
        singleBed: 1,
        doubleBed: 0,
        wifi: '1',
        tv: '0'
      },
      {
        hotelId: 1,
        title: 'Suite 4',
        image: '/files/images/rooms/0fe7e400.png',
        singleBed: 1,
        doubleBed: 1,
        wifi: '1',
        tv: '1'
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rooms', null, {});
  }
};
