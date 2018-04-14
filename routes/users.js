const express = require('express'),
	router = express.Router(),
	userController = require('../controllers/user'),
	verifyAuth  = require('./middlewares/verifyAuth'),
	validation = require('./middlewares/validations');


/* GET user info. */
router.get('/',
	userController.retrieve,
	function(req, res) {
		res.render('pages/index', { title: 'USer', user:  res.locals.user});
	}
);

/* POST donate randomly. */
router.post('/donate',
	[ validation.donation,
		validation.category,
		validation.location],
	verifyAuth.user,
	userController.donate,
	function(req, res) {
		res.render('pages/index', { title: 'User' });
	}
);


module.exports = router;
