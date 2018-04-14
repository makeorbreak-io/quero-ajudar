'use strict';
module.exports = (sequelize, DataTypes) => {
	var Partner = sequelize.define('Partner', {
		name: {
			allowNull: false,
			type: DataTypes.STRING(50)
		},
		logo: {
			allowNull: false,
			type: DataTypes.STRING
		},
		website: {
			type: DataTypes.STRING
		}
	}, {});
	Partner.associate = function(models) {
		Partner.hasMany(models.Prize, {as: 'prizes'});
	};
	return Partner;
};