const Op = Sequelize.Op,
	Partner = require('../models/index').Partner;

module.exports = {

	list(req, res, next) {
		Partner
			.findAll()
			.then(partners => {
				res.locals.partners = partners;
				next();
			})
			.catch(err => {
				res.status(500).redirect('/');
			});
	}
};