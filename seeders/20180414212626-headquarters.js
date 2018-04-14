'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Headquarters', [
			{
				organizationId: 4,
				name: 'Cáritas Diocesana Dos Açores',
				lat: 38.6680878,
				lng: -27.2484066,
				address: 'Canada dos Folhadais, 54 – São Pedro',
				zipCode: '9700-202 Andra do Heroísmo',
				phoneNumber1: '295212795',
				phoneNumber2:'',
				email:'geral@caritasterceira.org',
				location:'Açores',
				createdAt : new Date(),
				updatedAt : new Date()
			},
			{
				organizationId: 4,
				name: 'Cáritas Diocesana De Aveiro',
				lat: 40.6450446,
				lng: -8.6487256,
				address: 'Rua do Carmo, nº 42',
				zipCode: '3800-127 Aveiro',
				phoneNumber1: '234 377 260',
				phoneNumber2:'',
				email:'aveiro@caritas.pt',
				location:'Aveiro',
				createdAt : new Date(),
				updatedAt : new Date()
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
	}
};