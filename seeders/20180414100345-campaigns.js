'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Campaigns', [
			{
				name: 'Pedrogao',
				urlName: 'pedrogao',
				description: 'Restaurar os danos causados pelos fogos em pedrogão e evitar novas tragédias',
				category: '1',
                website:'www.pedrogao-campanha.com',
				facebook:'facebook.com/pedrogao-campanha',
				instagram:'instagram.com/pedrogao-campanha',
				startingAt : new Date(),
				endingAt : new Date(),
				createdAt : new Date(),
				updatedAt : new Date()



			},
			{
				name: 'Associação de Apoio à Vitima',
				urlName: 'apav',
				description: 'Apoiar as vítimas de crime, suas famílias e amigos, prestando-lhes serviços de qualidade, gratuitos e confidenciais e contribuir para o aperfeiçoamento das políticas públicas, sociais e privadas centradas no estatuto da vítima.',
				category: '2',
				website:'www.apav.pt',
				facebook:'https://www.facebook.com/APAV.Portugal/',
				startingAt : new Date(),
				endingAt : new Date(),
				createdAt : new Date(),
				updatedAt : new Date()


			},
			{
				name: 'Alcoolicos Anonimos',
				urlName: 'alcoolicos-anonimos',
				description: 'O nosso objetivo á ajudar alcoólicos a ultrapassarem o seu vicio, e dar o apoio necessário a ex-alc´´olico para que não tenham uma recaida',
				category: '4',
				website: 'www.alcoolicos-anonimos.pt',
				startingAt : new Date(),
				endingAt : new Date(),
				createdAt : new Date(),
				updatedAt : new Date()
			}

		], {});
	},

	down: (queryInterface, Sequelize) => {
	}
};
