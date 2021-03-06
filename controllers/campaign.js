const Op = Sequelize.Op,
	Campaign = require('../models/index').Campaign,
	Image = require('../models/index').Image,
	Good = require('../models/index').Good,
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
				},
                    {
                        model: Image,
                        as: 'images'
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
				},
				include: [{
					model: Headquarter,
					as: 'headquarters',
				},{
					model: Good,
					as: 'goods',
				},{
					model: Image,
					as: 'images',
				}]
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