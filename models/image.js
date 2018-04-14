'use strict';
module.exports = (sequelize, DataTypes) => {
	var Image = sequelize.define('Image', {
		path: {
			allowNull: false,
			type: DataTypes.STRING
		}
	}, {});
	Image.associate = function(models) {
		Image.belongsTo(models.Organization);
		Image.belongsTo(models.Campaign);
	};
	return Image;
};