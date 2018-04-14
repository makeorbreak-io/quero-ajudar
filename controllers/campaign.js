const Op = Sequelize.Op,
	Campaign = require('../models/index').Campaign;

module.exports = {

	list(req, res, next) {
		Campaign
			.findAll()
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
					name: req.params.name
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