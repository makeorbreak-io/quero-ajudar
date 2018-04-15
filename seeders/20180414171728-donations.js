'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Donations', [{
        amount : '500',
        userId  : '1',
        campaignId  : '1',
        createdAt : new Date(),
        updatedAt : new Date()
    },
        {
            amount : '1000',
            userId  : '2',
            organizationId  : '2',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            amount : '10000',
            category : '3',
            location : 'Guarda',
            userId  : '3',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            amount : '10000',
            location : 'Guarda',
            userId  : '3',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            amount : '100000',
            category:'8',
            location : 'Porto',
            userId  : '4',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            amount : '20',
            category:'5',
            location : 'Lisboa',
            userId  : '4',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            amount : '420',
            category:'8',
            location : 'Guarda',
            userId  : '2',
            createdAt : new Date(),
            updatedAt : new Date()
        }], {});
},

down: (queryInterface, Sequelize) => {
}
};
