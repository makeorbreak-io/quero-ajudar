'use strict';
module.exports = (sequelize, DataTypes) => {
	var Headquarter = sequelize.define('Headquarter', {
		name: {
			allowNull: false,
			type: DataTypes.STRING(50)
		},
		lat: {
			allowNull: false,
			type: DataTypes.FLOAT
		},
		lng: {
			allowNull: false,
			type: DataTypes.FLOAT
		},
		address: {
			allowNull: false,
			type: DataTypes.STRING(100)
		},
		zipCode: {
			allowNull: false,
			type: DataTypes.STRING(100)
		},
		phoneNumber1: {
			type: DataTypes.STRING(20)
		},
		phoneNumber2: {
			type: DataTypes.STRING(20)
		},
		email: {
			type: DataTypes.STRING
		},
		location: {
			allowNull: false,
			type: DataTypes.ENUM(config.locations)
		}
	}, {});
	Headquarter.associate = function(models) {
		Headquarter.belongsTo(models.Organization);
		Headquarter.belongsTo(models.Campaign);
	};
	return Headquarter;
};