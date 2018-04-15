'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [

        {
            organizationId: 1,
            path: '/images/animais/slide1.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 1,
            path: '/images/slide2.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 1,
            path: '/images/slide3.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 2,
            path: '/images/apav/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 2,
            path: '/images/apav/slide2.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 2,
            path: '/images/apav/slide3.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 3,
            path: '/images/aa/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 3,
            path: '/images/aa/slide2.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 3,
            path: '/images/aa/slide3.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 4,
            path: '/images/caritas/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 4,
            path: '/images/caritas/slide2.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 4,
            path: '/images/caritas/slide3.jpg',
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
