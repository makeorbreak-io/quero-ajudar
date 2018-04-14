const Op = Sequelize.Op,
	Campaign = require('../models/index').Campaign,
	Headquarter = require('../models/index').Headquarter;

module.exports = {

	list(req, res, next) {
		var whereClause1 ={}, whereClause2= {};
		if(req.query.category != null){
			whereClause1 = { category : req.query.category};
		}
		if(req.query.location != null){
			whereClause2 = { location : req.query.location};
		}
		Campaign
			.findAll({
				where: whereClause1,
				include: [{
					model: Headquarter,
					as: 'headquarters',
					where: whereClause2
				}]
			})
			.then(campaigns => {
				res.locals.campaigns = campaigns;
				next();
			})
			.catch(err => {
				res.status(500).redirect('/homepage');
			});
	},
	retrieve: function (req, res, next) {
		Campaign
			.findOne({
				where: {
					urlName: req.params.name
				}
			})
			.then(campaign => {
				if (campaign) {
					res.locals.campaign = campaign;
					next();
				} else {
					res.status(400).redirect('/campanhas');
				}
			})
			.catch(err => {
				res.status(500).redirect('/homepage');
			});
	}
};