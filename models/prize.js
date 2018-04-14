'use strict';
module.exports = (sequelize, DataTypes) => {
	var Prize = sequelize.define('Prize', {
		name: {
			allowNull: false,
			type: DataTypes.STRING(50)
		},
		image: {
			allowNull: false,
			type: DataTypes.STRING
		},
		url: {
			type: DataTypes.STRING
		},
		startingAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		endingAt: {
			allowNull: false,
			type: DataTypes.DATE
		}
	}, {});
	Prize.associate = function(models) {
		Prize.belongsTo(models.Partner);
	};
	return Prize;
};