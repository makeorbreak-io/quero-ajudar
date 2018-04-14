const express = require('express'),
	router = express.Router(),
	organizationController = require('../controllers/organization'),
	donationController = require('../controllers/donation');

/* GET organization listing. */
router.get('/',
	organizationController.list,
	function(req, res) {
		res.render('pages/organizations', { title: 'Organizations', organizations:  res.locals.organizations});
	}
);

/* GET an organization information. */
router.get('/:name',
	//organizationController.retrieve,
	function(req, res) {
		res.render('pages/organizations/view', { title: 'Organization', organization:  res.locals.organization});
	}
);

/* POST make donation */
router.post('/:name/donate',
	donationController.donateOrganization,
	function(req, res) {
		res.redirect('/organizations/' + req.params.name);
	}
);
module.exports = router;
