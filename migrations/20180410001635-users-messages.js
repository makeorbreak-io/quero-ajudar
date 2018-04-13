'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('UsersMessages', {
			id: {
				primaryKey: true,
				autoIncrement: true,
				type: Sequelize.INTEGER
			},
			messageId: {
				allowNull: false,
				references: {
					model: 'Messages',
					key: 'id'
				},
				type: Sequelize.INTEGER
			},
			clientNumber: {
				allowNull: false,
				references: {
					model: 'Users',
					key: 'clientNumber'
				},
				type: Sequelize.INTEGER.UNSIGNED
			},
			isRead: {
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
		return queryInterface.dropTable('UsersMessages');
	}
};
