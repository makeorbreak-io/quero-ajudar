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
					model: 'User',
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
			name: {
				type: Sequelize.STRING
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