'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [

        {
            organizationId: 1,
            path: '/images/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 1,
            path: '/images/slide2.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 1,
            path: '/images/slide3.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 2,
            path: '/images/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 2,
            path: '/images/slide2.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 2,
            path: '/images/slide3.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 1,
            path: '/images/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 1,
            path: '/images/slide2.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 1,
            path: '/images/slide3.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 2,
            path: '/images/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 2,
            path: '/images/slide2.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 2,
            path: '/images/slide3.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        }
    ], {});
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
