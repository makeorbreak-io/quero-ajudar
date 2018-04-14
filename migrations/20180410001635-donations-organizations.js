'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('DonationsOrganizations', {
			id: {
				primaryKey: true,
				autoIncrement: true,
				type: Sequelize.INTEGER
			},
			donationId: {
				allowNull: false,
				references: {
					model: 'Donations',
					key: 'id'
				},
				type: Sequelize.INTEGER
			},
			organizationId: {
				allowNull: false,
				references: {
					model: 'Organizations',
					key: 'id'
				},
				type: Sequelize.INTEGER
			},
			amount: {
				allowNull: false,
				type: Sequelize.FLOAT
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
		return queryInterface.dropTable('DonationsOrganizations');
	}
};
