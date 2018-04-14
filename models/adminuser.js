'use strict';
module.exports = (sequelize, DataTypes) => {
	var AdminUser = sequelize.define('AdminUser', {
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
		disabled: {
			allowNull: false,
			defaultValue: false,
			type: DataTypes.BOOLEAN
		}
	}, {});
	AdminUser.associate = function(models) {
	};
	return AdminUser;
};