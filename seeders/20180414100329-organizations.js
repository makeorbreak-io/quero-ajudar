'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Organizations', [
        {
            name: 'Juntos pelos  animais',
            urlName: 'juntos-pelos-animais',
            description: 'Associação de apoio e resgate dos animais, defesa contra os seus maus tratos e luta pela sua dignidade e direitos.',
            rating: 50,
            logo: '/images/organizations/juntos_pelos_animais.png',
            category: '1',
            website:'www.juntospelosanimais.com',
            facebook:'facebook.com/juntospeloanimais',
            instagram:'instagram.com/juntospelosanimais',
            createdAt : new Date(),
            updatedAt : new Date(),
        },
        {
            name: 'Associação de Apoio à Vitima',
            urlName: 'apav',
            description: 'Apoiar as vítimas de crime, suas famílias e amigos.',
            rating: 80,
            logo: '/images/organizations/apav.png',
            category: '2',
            website:'www.apav.pt',
            facebook:'https://www.facebook.com/APAV.Portugal/',
            createdAt : new Date(),
            updatedAt : new Date(),
        },
        {
            name: 'Alcoolicos Anonimos',
            urlName: 'alcoolicos-anonimos',
            description: 'O nosso objetivo á ajudar alcoólicos a ultrapassarem o seu vicio, e dar o apoio necessário a ex-alcoolico para que não tenham uma recaida',
            rating: 20,
            logo: '/images/organizations/alcoolicos_anonimos.png',
            category: '4',
            website: 'www.alcoolicos-anonimos.pt',
            createdAt : new Date(),
            updatedAt : new Date(),
        },
        {
            name: 'Banco Alimentar',
            urlName: 'banco-alimentar',
            description: 'Uma resposta necessária mas provisória, porque "toda a pessoa tem direito a um nível de vida suficiente que lhe assegure e à sua família, a saúde e o bem-estar..."',
            rating: 20,
            logo: '/images/organizations/bancoAlimentar.png',
            category: '4',
            website: 'http://www.bancoalimentar.pt',
            createdAt : new Date(),
            updatedAt : new Date(),
        },
        {
            name: 'Comunidade Vida e Paz',
            urlName: 'comunidade-vida-paz',
            description: 'Os princípios que regem a Comunidade Vida e Paz são universais e aclamados por indivíduos em todos os cantos do Mundo.',
            rating: 20,
            logo: '/images/organizations/comunidadeVidaPaz.jpg',
            category: '4',
            website: 'https://www.cvidaepaz.pt',
            createdAt : new Date(),
            updatedAt : new Date(),
        },
        {
            name: 'Cáritas Portuguesas',
            urlName: 'caritas',
            description: 'A Cáritas Portuguesa tem como missão o desenvolvimento humano e a defesa do bem comum.',
            rating: 80,
            logo: '/images/organizations/caritas.png',
            category: '1',
            website: 'www.caritas.pt',
            createdAt : new Date(),
            updatedAt : new Date(),
        }
        ], {});
},

down: (queryInterface, Sequelize) => {
}
};
