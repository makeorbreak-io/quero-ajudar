'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Goods', {
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
			type: {
				allowNull: false,
				type: Sequelize.ENUM(config.goods)
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
		return queryInterface.dropTable('Goods');
	}
};