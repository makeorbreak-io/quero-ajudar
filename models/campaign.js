'use strict';
module.exports = (sequelize, DataTypes) => {
	var Campaign = sequelize.define('Campaign', {
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
		startingAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		endingAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
	}, {});
	Campaign.associate = function(models) {
		Campaign.hasMany(models.Image, {as: 'images'});
		Campaign.hasMany(models.Headquarter, {as: 'headquarters'});
		Campaign.hasMany(models.Good, {as: 'goods'});
		Campaign.hasMany(models.Donation, {as: 'donations'});
	};
	return Campaign;
};