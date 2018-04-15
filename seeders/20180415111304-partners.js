'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Partners', [
        {
            name: 'Porto',
            logo: 'public/images/partners/portoLogo.svg',
            website: 'www.porto.pt',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'ScaleUp',
            logo: 'public/images/partners/scaleUpLogo.svg',
            website: 'www.scaleup.pt',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'Blip',
            logo: 'public/images/partners/blipLogo.svg',
            website: 'www.blip.pt',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'Alientech',
            logo: 'public/images/partners/alientechLogo.svg',
            website: 'www.alientech.pt',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'FEUP',
            logo: 'public/images/partners/feupLogo.svg',
            website: 'www.fe.up.pt',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'Life On Mars',
            logo: 'public/images/partners/lifeOnMarsLogo.svg',
            website: '',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'Abyssal',
            logo: 'public/images/partners/abyssalLogo.svg',
            website: '',
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name: 'Hapibot',
            logo: 'public/images/partners/hapibotLogo.svg',
            website: '',
            createdAt : new Date(),
            updatedAt : new Date()
        },
    ], {});
},

down: (queryInterface, Sequelize) => {
}
};
