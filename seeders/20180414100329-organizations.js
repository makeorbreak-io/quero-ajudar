'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.bulkInsert('Organizations', [
			{
				name: 'Juntos pelos  animais',
				description: 'Associação de apoio e resgate dos animais, defesa contra os seus maus tratos e luta pela sua dignidade e direitos.',
				logo: '/images/apav.jpg',
				category: '1',
				website:'www.juntospelosanimais.com',
				facebook:'facebook.com/juntospeloanimais',
				instagram:'instagram.com/juntospelosanimais',
                createdAt : new Date(),
                updatedAt : new Date()



			},
			{
				name: 'Associação de Apoio à Vitima',
				description: 'Apoiar as vítimas de crime, suas famílias e amigos, prestando-lhes serviços de qualidade, gratuitos e confidenciais e contribuir para o aperfeiçoamento das políticas públicas, sociais e privadas centradas no estatuto da vítima.',
				logo: '/images/apav.jpg',
				category: '2',
				website:'www.apav.pt',
				facebook:'https://www.facebook.com/APAV.Portugal/',
                createdAt : new Date(),
                updatedAt : new Date()


			},
			{
				name: 'Alcoolicos Anonimos',
				description: 'O nosso objetivo á ajudar alcoólicos a ultrapassarem o seu vicio, e dar o apoio necessário a ex-alc´´olico para que não tenham uma recaida',
				logo: '/images/apav.jpg',
				category: '4',
				website: 'www.alcoolicos-anonimos.pt',
    createdAt : new Date(),
    updatedAt : new Date()
			}

		], {});
	},

	down: (queryInterface, Sequelize) => {
	}
};
