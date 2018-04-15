const express = require('express'),
	router = express.Router(),
	organizationController = require('../controllers/organization'),
	donationController = require('../controllers/donation'),
	verifyAuth  = require('./middlewares/verifyAuth'),
	validation = require('./middlewares/validations');

/* GET organization list. */
router.get('/',
	organizationController.list,
	function(req, res) {
		res.render('pages/organizations/', { title: 'Organizations', organizations:  res.locals.organizations, userLogged : req.session.userId, categories: config.categories, locations: config.location});
	}
);

/* GET organization information. */
router.get('/:name',
	organizationController.retrieve,
	function(req, res) {
		res.render('pages/organizations/view', { title: 'Organization', organization:  res.locals.organization, userLogged : req.session.userId, formUrl: '/associacoes/' + req.params.name + '/donate', categories: config.categories, locations: config.location});
	}
);

/* POST make donation to organization. */
router.post('/:name/donate',
	[ validation.amount,
		validation.id ],
	verifyAuth.user,
	donationController.donateOrganization,
	function(req, res) {
		res.redirect('/organizations/' + req.params.name);
	}
);
module.exports = router;
