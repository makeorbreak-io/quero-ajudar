'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Donations', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userId: {
				allowNull: false,
				references: {
					model: 'Users',
					key: 'id'
				},
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
			amount:{
				allowNull:false,
				type: Sequelize.INTEGER
			},
			category: {
				type: Sequelize.ENUM(config.categories)
			},
			location: {
				type: Sequelize.ENUM(config.location)
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
		return queryInterface.dropTable('Donations');
	}
};