'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'hotels',
          key: 'id'
        }
      },
      image: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      singleBed: {
        type: Sequelize.INTEGER
      },
      doubleBed: {
        type: Sequelize.INTEGER
      },
      wifi: {
        type: Sequelize.ENUM,
        values: ['0', '1']
      },
      tv: {
        type: Sequelize.ENUM,
        values: ['0', '1']
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('rooms');
  }
};
