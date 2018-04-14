const Op = Sequelize.Op,
	Donation = require('../models/index').Donation;

function getLastWeek(){
	var today = new Date();
	var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
	return lastWeek ;
};

function getToday(){
	var today = new Date();
	var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	return lastWeek ;
};

module.exports = function(){
	console.log('Vou correr manos!');
	Donation
		.findAll({
			where:  {
				[Op.and]: [
					{
						organizationId: {
							[Op.eq] : null
						}
					},
					{
						campaignId: {
							[Op.eq] : null
						}
					},
					{
						createdAt: {
							[Op.lt]: getToday(),
							[Op.gt]: getLastWeek()
						}
					}
				]
			}
		})
		.then(donations => {
			console.log(donations);
		})
		.catch(err => {
			console.log(err);
		});
};