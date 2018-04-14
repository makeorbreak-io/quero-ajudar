'use strict';
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		email: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING
		},
		firstName: {
			allowNull: false,
			defaultValue: '',
			type: DataTypes.STRING(50)
		},
		lastName: {
			allowNull: false,
			defaultValue: '',
			type: DataTypes.STRING(50)
		},
		activated: {
			allowNull: false,
			defaultValue: false,
			type: DataTypes.BOOLEAN
		},
		disabled: {
			allowNull: false,
			defaultValue: false,
			type: DataTypes.BOOLEAN
		}
	}, {});
	User.associate = function(models) {
		User.hasMany(models.Donation, {as: 'donations'});
	};
	return User;
};