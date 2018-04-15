'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Organizations', {
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
			urlName: {
				allowNull: false,
				type: Sequelize.STRING(50)
			},
			description: {
				allowNull: false,
				type: Sequelize.TEXT
			},
			rating: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			logo: {
				allowNull: false,
				type: Sequelize.STRING
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
		return queryInterface.dropTable('Organizations');
	}
};