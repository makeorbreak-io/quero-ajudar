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
		Donation.belongsTo(models.User, {as : 'user', foreignKey: 'userId'});
		Donation.belongsTo(models.Organization, {as : 'Organization', foreignKey: 'organizationId'});
		Donation.belongsTo(models.Campaign, {as : 'Campaign', foreignKey: 'campaignId'});
		Donation.belongsToMany(models.Organization, {through: 'DonationsOrganizations', as: 'donationId'});
	};
	return Donation;
};