const express = require('express'),
	router = express.Router(),
	partnerController = require('../controllers/partner');

/* GET partners listing. */
router.get('/',
	partnerController.list,
	function(req, res) {
		res.render('pages/partners/index', { title: 'Parceiros', partners:  res.locals.partners, userLogged : req.session.userId, categories: config.categories, locations: config.locations});
	}
);

module.exports = router;
