'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Donations', [{
          amount : '500',
          category : '1',
          location : 'Porto',
          userId  : '1',
          organizationId  : '1',
          campaignId  : '1',
          createdAt : new Date(),
          updatedAt : new Date()
      },
          {
              amount : '1000',
              category : '2',
              location : 'Aveiro',
              userId  : '2',
              organizationId  : '2',
              campaignId  : '2',
              createdAt : new Date(),
              updatedAt : new Date()
          },
          {
              amount : '10000',
              category : '3',
              location : 'Guarda',
              userId  : '3',
              organizationId  : '3',
              campaignId  : '3',
              createdAt : new Date(),
              updatedAt : new Date()
          }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
