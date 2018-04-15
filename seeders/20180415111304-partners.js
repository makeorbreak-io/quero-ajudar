'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Partners', [
        {
            name: 'Porto',
            logo: '/images/partners/portoLogo.svg',
            website: 'http://www.porto.pt',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'ScaleUp',
            logo: '/images/partners/scaleUpLogo.svg',
            website: 'http://www.scaleup.pt',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'Blip',
            logo: '/images/partners/blipLogo.svg',
            website: 'http://www.blip.pt',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'Alientech',
            logo: '/images/partners/alientechLogo.svg',
            website: 'http://www.alientech.pt',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'FEUP',
            logo: '/images/partners/feupLogo.svg',
            website: 'http://www.fe.up.pt',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'Life On Mars',
            logo: '/images/partners/lifeOnMarsLogo.svg',
            website: '',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'Abyssal',
            logo: '/images/partners/abyssalLogo.svg',
            website: '',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'Hapibot',
            logo: '/images/partners/hapibotLogo.svg',
            website: '',
            createdAt : new Date(),
            updatedAt : new Date()
        },
    ], {});
},

down: (queryInterface, Sequelize) => {
}
};
