'use strict';
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		clientNumber: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED
		},
		username: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING(50)
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING
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
		User.belongsToMany(models.Message, {through: 'UsersMessages', as: 'messages', foreignKey: 'clientNumber'});
	};
	return User;
};