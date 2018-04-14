'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Goods', [
    {
        organizationId: 1,
        type: 'clothes',
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        organizationId: 1,
        type: 'toys',
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        campaignId: 1,
        type: 'clothes',
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        campaignId: 1,
        type: 'toys',
        createdAt : new Date(),
        updatedAt : new Date()
    }
], {});
},

down: (queryInterface, Sequelize) => {
}
};
