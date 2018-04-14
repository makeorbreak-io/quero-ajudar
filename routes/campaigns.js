const express = require('express'),
	router = express.Router(),
	campaignController = require('../controllers/campaign'),
	donationController = require('../controllers/donation');

/* GET campaign listing. */
router.get('/',
	campaignController.list,
	function(req, res) {
		res.render('pages/campaigns', { title: 'Campaigns', campaigns:  res.locals.campaigns});
	}
);

/* GET a campaign information. */
router.get('/:name',
	//campaignController.retrieve,
	function(req, res) {
		res.render('pages/campaigns/view', { title: 'Campaign', campaigns:  res.locals.organization});
	}
);

/* POST make donation */
router.post('/:name/donate',
	donationController.donateCampaign,
	function(req, res) {
		res.redirect('/campaigns/' + req.params.name);
	}
);
module.exports = router;
