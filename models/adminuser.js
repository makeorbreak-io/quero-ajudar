'use strict';
module.exports = (sequelize, DataTypes) => {
	var AdminUser = sequelize.define('AdminUser', {
		username: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING(50)
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
		privileges: {
			allowNull: false,
			type: DataTypes.ENUM('admin', 'regular', 'support')
		},
		disabled: {
			allowNull: false,
			defaultValue: false,
			type: DataTypes.BOOLEAN
		}
	}, {});
	AdminUser.associate = function(models) {
		// associations can be defined here
	};
	return AdminUser;
};