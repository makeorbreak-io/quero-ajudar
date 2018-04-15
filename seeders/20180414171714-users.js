'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            email : 'diogoreis@gmail.com',
            firstName : 'Diogo',
            lastName : 'Reis',
            password : '$2a$10$JvIACDICoSoOMa8ny2gbn.qxH2HftnieGDZ.i8dFreOXH1xOvntF6',  // Diogoreis18!
            createdAt : new Date(),
            updatedAt : new Date(),

        },
            {
                email : 'jorgevale@gmail.com',
                firstName : 'Jorge',
                lastName : 'Vale',
                password : '$2a$10$AZjfQo9dtLBg5yBAM0HAJuRDNmQ/5BoiZZBdophU8IgpUc4O015ya',  // Jorgevale11!
                createdAt : new Date(),
                updatedAt : new Date(),

            },
            {
                email : 'telmobarros@gmail.com',
                firstName : 'Telmo',
                lastName : 'Barros',
                password : '$2a$10$yP762wxt1AhQZjMBAtSgluwqq02lcj0L/WCEAxvVqkDM3Kv8irGmK',  // Telmobarros20!
                createdAt : new Date(),
                updatedAt : new Date(),

            },
            {
                email : 'zedu@gmail.com',
                firstName : 'José',
                lastName : 'Eduardo',
                password : '$2a$10$Kurkcxpntw7HKXTKlTO2ReFuez9IA8QRFduTMqbMAiSuVwCK26/K6',  // Zedulol2!
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
