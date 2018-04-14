'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            email : 'diogoreis@gmail.com',
            firstName : 'Diogo',
            lastName : 'Reis',
            password : '$2a$10$IGPLG4ThzTM7jnuLgaM2TO.93tLLH7B1JE5.e3Iog/NlS6IhzxZbW',  // Diogoreis18
            createdAt : new Date(),
            updatedAt : new Date(),

        },
            {
                email : 'jorgevale@gmail.com',
                firstName : 'Jorge',
                lastName : 'Vale',
                password : '$2a$10$qiUI5lHyYicocr2Zsowzj.D6VGiyxuII4GeF3oJuf9WK4ven6w7gq',  // Jorgevale11
                createdAt : new Date(),
                updatedAt : new Date(),

            },
            {
                email : 'telmobarros@gmail.com',
                firstName : 'Telmo',
                lastName : 'Barros',
                password : '$2a$10$xLTWbb/SIp/bynC8xx6Ki.g6kNNsdUNpxCn3KHIj5IB5MIS60RWva',  // Telmobarros20
                createdAt : new Date(),
                updatedAt : new Date(),

            },
            {
                email : 'zedu@gmail.com',
                firstName : 'José',
                lastName : 'Eduardo',
                password : '$2a$10$yO/hofrni5ipPEuNi6cnrezCJV3Oc24sJQAKhjTMfmeH2JW6nKEx.',  // Zedulol2
                createdAt : new Date(),
                updatedAt : new Date(),

            },
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
