'use strict';
module.exports = (sequelize, DataTypes) => {
	var Message = sequelize.define('Message', {
		adminId: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		subject: {
			allowNull: false,
			type: DataTypes.STRING(50),
		},
		content: {
			allowNull: false,
			type: DataTypes.TEXT,
		}
	}, {});
	Message.associate = function(models) {
	  Message.belongsTo(models.AdminUser);

	  Message.belongsToMany(models.User, {through: 'UsersMessages', as: 'messageId'});
	};
	return Message;
};