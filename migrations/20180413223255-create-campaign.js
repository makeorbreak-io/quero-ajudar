'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Campaigns', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING(50)
			},
			description: {
				allowNull: false,
				type: Sequelize.TEXT
			},
			category: {
				allowNull: false,
				type: Sequelize.ENUM(config.categories)
			},
			website: {
				type: Sequelize.STRING
			},
			facebook: {
				type: Sequelize.STRING
			},
			instagram: {
				type: Sequelize.STRING
			},
			startingAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			endingAt: {
				allowNull: false,
				type: Sequelize.DATE
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
		return queryInterface.dropTable('Campaigns');
	}
};