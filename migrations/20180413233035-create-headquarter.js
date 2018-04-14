'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Headquarters', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			organizationId: {
				references: {
					model: 'Organizations',
					key: 'id'
				},
				type: Sequelize.INTEGER
			},
			campaignId: {
				references: {
					model: 'Campaigns',
					key: 'id'
				},
				type: Sequelize.INTEGER
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING(50)
			},
			lat: {
				allowNull: false,
				type: Sequelize.FLOAT
			},
			lng: {
				allowNull: false,
				type: Sequelize.FLOAT
			},
			address: {
				allowNull: false,
				type: Sequelize.STRING(100)
			},
			zipCode: {
				allowNull: false,
				type: Sequelize.STRING(100)
			},
			phoneNumber1: {
				type: Sequelize.STRING(20)
			},
			phoneNumber2: {
				type: Sequelize.STRING(20)
			},
			email: {
				type: Sequelize.STRING
			},
			location: {
				type: Sequelize.ENUM(config.locations)
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Headquarters');
	}
};