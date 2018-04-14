'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('AdminUsers', [{
			email : 'admin',
			firstName : 'Default',
			lastName : 'Admin',
			password : '$2a$10$l9hSnj6iMPXSpmjt39eoAOTOhvdGGyCIKcVdFXz5asDRI6wZzy0c2',  // Admin123
			createdAt : new Date(),
			updatedAt : new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		queryInterface.bulkDelete('AdminUsers', [{
			username :'admin'
		}]);
	}
};
