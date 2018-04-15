'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [

        {
            organizationId: 1,
            path: '/images/organizations/animais/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 1,
            path: '/images/organizations/animais/slide2.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 1,
            path: '/images/organizations/animais/slide3.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 2,
            path: '/images/organizations/apav/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 2,
            path: '/images/organizations/apav/slide2.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 2,
            path: '/images/organizations/apav/slide3.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 3,
            path: '/images/organizations/apav/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 3,
            path: '/images/organizations/apav/slide2.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 3,
            path: '/images/organizations/apav/slide3.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 4,
            path: '/images/organizations/apav/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 4,
            path: '/images/organizations/apav/slide2.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            organizationId: 4,
            path: '/images/organizations/apav/slide3.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 1,
            path: '/images/campaigns/pedrogao/fire1.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 1,
            path: '/images/campaigns/pedrogao/fire2.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 1,
            path: '/images/campaigns/pedrogao/fire3.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 2,
            path: '/images/campaigns/apav/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 2,
            path: '/images/campaigns/apav/slide2.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 2,
            path: '/images/campaigns/apav/slide3.png',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 3,
            path: '/images/campaigns/aa/slide1.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 3,
            path: '/images/campaigns/aa/slide2.jpg',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            campaignId: 3,
            path: '/images/campaigns/aa/slide3.jpg',
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
