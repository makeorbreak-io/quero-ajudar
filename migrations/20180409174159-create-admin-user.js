'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('AdminUsers', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			email: {
				allowNull: false,
				unique: true,
				type: Sequelize.STRING
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING
			},
			firstName: {
				allowNull: false,
				defaultValue: '',
				type: Sequelize.STRING
			},
			lastName: {
				allowNull: false,
				defaultValue: '',
				type: Sequelize.STRING
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
		return queryInterface.dropTable('AdminUsers');
	}
};