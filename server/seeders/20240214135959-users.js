'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { email: "john.doe@example.com", firstName: "John", lastName: "Doe", createdAt: new Date(), updatedAt: new Date() },
      { email: "jane.smith@example.com", firstName: "Jane", lastName: "Smith", createdAt: new Date(), updatedAt: new Date() },
      { email: "bob.jones@example.com", firstName: "Bob", lastName: "Jones", createdAt: new Date(), updatedAt: new Date() },
      { email: "alice.white@example.com", firstName: "Alice", lastName: "White", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
