'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Prizes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			partnerId: {
				allowNull: false,
				references: {
					model: 'Partners',
					key: 'id'
				},
				type: Sequelize.INTEGER
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING(50)
			},
			image: {
				allowNull: false,
				type: Sequelize.STRING
			},
			url: {
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
		return queryInterface.dropTable('Prizes');
	}
};