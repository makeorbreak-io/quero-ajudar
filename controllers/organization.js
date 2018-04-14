const Op = Sequelize.Op,
	Organization = require('../models/index').Organization,
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
		Organization
			.findAll({
				where: whereClause1,
				include: [{
					model: Headquarter,
					as: 'headquarters',
					where: whereClause2
				}]
			})
			.then(organizations => {
				res.locals.organizations = organizations;
				next();
			})
			.catch(err => {
				console.log(err);
				res.status(500).redirect('/homepage');
			});
	},
	retrieve: function (req, res, next) {
		Organization
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
			.then(organization => {
				if (organization) {
					res.locals.organization = organization;
					next();
				} else {
					res.status(400).redirect('/associacoes');
				}
			})
			.catch(err => {
				res.status(500).redirect('/homepage');
			});
	}
};