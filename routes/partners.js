const express = require('express'),
	router = express.Router(),
	partnerController = require('../controllers/partner');

/* GET partners listing. */
router.get('/',
	partnerController.list,
	function(req, res) {
		res.render('pages/partners', { title: 'Partners', partners:  res.locals.partners});
	}
);

module.exports = router;
