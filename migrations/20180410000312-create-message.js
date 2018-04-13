'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Messages', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			adminId: {
				allowNull: false,
				references: {
					model: 'AdminUsers',
					key: 'id'
				},
				type: Sequelize.INTEGER
			},
			subject: {
				allowNull: false,
				type: Sequelize.STRING(50)
			},
			content: {
				allowNull: false,
				type: Sequelize.TEXT
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
		return queryInterface.dropTable('Messages');
	}
};