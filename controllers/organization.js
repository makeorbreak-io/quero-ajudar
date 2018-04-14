const Op = Sequelize.Op,
	Organization = require('../models/index').Organization;

module.exports = {

	list(req, res, next) {
		Organization
			.findAll()
			.then(organizations => {
				res.locals.organizations = organizations;
				next();
			})
			.catch(err => {
				res.status(500).redirect('/homepage');
			});
	},
	retrieve: function (req, res, next) {
		Organization
			.findOne({
				where: {
					name: req.params.name
				}
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