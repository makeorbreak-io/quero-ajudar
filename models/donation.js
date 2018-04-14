'use strict';
module.exports = (sequelize, DataTypes) => {
	var Donation = sequelize.define('Donation', {
		amount : {
			allowNull: false,
			type: DataTypes.FLOAT
		},
		category: {
			type: DataTypes.ENUM(config.categories)
		},
		location: {
			type: DataTypes.ENUM(config.location)
		}
	}, {});
	Donation.associate = function(models) {
		Donation.belongsTo(models.User, {as : 'The User', foreignKey: 'userId'});
		Donation.belongsTo(models.Organization, {as : 'The Organization', foreignKey: 'organizationId'});
		Donation.belongsTo(models.Campaign, {as : 'The Campaign', foreignKey: 'campaignId'});
		Donation.belongsToMany(models.Organization, {through: 'DonationsOrganizations', as: 'donationId'});
	};
	return Donation;
};