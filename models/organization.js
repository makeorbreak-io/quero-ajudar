'use strict';
module.exports = (sequelize, DataTypes) => {
	var Organization = sequelize.define('Organization', {
		name: {
			allowNull: false,
			type: DataTypes.STRING(50)
		},
		urlName: {
			allowNull: false,
			type: DataTypes.STRING(50)
		},
		description: {
			allowNull: false,
			type: DataTypes.TEXT
		},
		rating: {
			allowNull: false,
			type: Sequelize.INTEGER
		},
		logo: {
			allowNull: false,
			type: DataTypes.STRING
		},
		category: {
			allowNull: false,
			type: DataTypes.ENUM(config.categories)
		},
		website: {
			type: DataTypes.STRING
		},
		facebook: {
			type: DataTypes.STRING
		},
		instagram: {
			type: DataTypes.STRING
		},
	}, {});
	Organization.associate = function(models) {
		Organization.hasMany(models.Image, {as: 'images'});
		Organization.hasMany(models.Headquarter, {as: 'headquarters'});
		Organization.hasMany(models.Good, {as: 'goods'});
		Organization.hasMany(models.Donation, {as: 'donations'});
		Organization.belongsToMany(models.Donation, {through: 'DonationsOrganizations', as: 'organizationId'});
	};
	return Organization;
};