'use strict';
module.exports = (sequelize, DataTypes) => {
	var Good = sequelize.define('Good', {
		type: {
			allowNull: false,
			type: DataTypes.ENUM(config.goods)
		}
	}, {});
	Good.associate = function(models) {
		Good.belongsTo(models.Organization);
		Good.belongsTo(models.Campaign);
	};
	return Good;
};