'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			clientNumber: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER.UNSIGNED
			},
			username: {
				allowNull: false,
				unique: true,
				type: Sequelize.STRING(50)
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING
			},
			activated: {
				allowNull: false,
				defaultValue: false,
				type: Sequelize.BOOLEAN
			},
			disabled: {
				allowNull: false,
				defaultValue: false,
				type: Sequelize.BOOLEAN
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
		return queryInterface.dropTable('Users');
	}
};