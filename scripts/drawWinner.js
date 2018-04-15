const Op = Sequelize.Op,
	sequelize = require('../models/index').sequelize,
	Donation = require('../models/index').Donation,
	User = require('../models/index').User,
	emailController = require('../controllers/email');

function getLastMonth(){
	var today = new Date();
	var lastMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30); //TODO FIX
	return lastMonth;
};

module.exports = function() {
	User
		.findAll({
			raw:true,
			group:'User.id',
			include: [{
				model: Donation,
				as: 'donations',
				where :{
					createdAt: {
						/*[Op.lt]: getToday(),*/
						[Op.gt]: getLastMonth()
					}
				},
				attributes:[
					[sequelize.fn('SUM', sequelize.col('donations.amount')),'nTickets']
				],
			}]
		})
		.then(users => {
			var total = 0;
			for(var i=0; i<users.length;i++){
				total += users[i]['donations.nTickets'];
			}

			var random = Math.floor(Math.random() * total);
			var temp = 0;
			var winner;
			for(var i=0; i<users.length;i++){
				temp += users[i]['donations.nTickets'];
				if(random <= temp){
					winner = users[i];
					break;
				}
			}
			emailController.sendWinnerEmail(winner, null);
		})
		.catch(err => {
			return;
		});
};

