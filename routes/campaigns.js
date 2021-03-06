const express = require('express'),
	router = express.Router(),
	campaignController = require('../controllers/campaign'),
	donationController = require('../controllers/donation'),
	verifyAuth  = require('./middlewares/verifyAuth'),
	validation = require('./middlewares/validations');

/* GET campaign list. */
router.get('/',
	campaignController.list,
	function(req, res) {
		res.render('pages/campaigns/index', { title: 'Campaigns', campaigns:  res.locals.campaigns, userLogged : req.session.userId, categories: config.categories, locations: config.locations});
	}
);

/* GET campaign information. */
router.get('/:name',
	campaignController.retrieve,
	function(req, res) {
		res.render('pages/campaigns/view', { title: 'Campaign', campaign:  res.locals.campaign, userLogged : req.session.userId, formUrl: '/campanhas/' + req.params.name + '/donate', categories: config.categories, locations: config.locations});
	}
);

/* POST make donation to campaign */
router.post('/:name/donate',
	[ validation.amount],
	verifyAuth.user,
	donationController.donateCampaign,
	function(req, res) {
		res.redirect('/campaigns/' + req.params.name);
	}
);
module.exports = router;
