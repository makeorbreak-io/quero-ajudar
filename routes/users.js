const express = require('express'),
	router = express.Router(),
	donationController = require('../controllers/donation'),
	userController = require('../controllers/user'),
	verifyAuth  = require('./middlewares/verifyAuth'),
	validation = require('./middlewares/validations');

/* GET user info. */
router.get('/',
	userController.retrieve,
	function(req, res) {
		res.render('pages/index', { title: 'User', user:  res.locals.user, userLogged : req.session.userId});
	}
);

/* POST donate randomly. */
router.post('/donate',
	[ validation.amount,
		validation.category,
		validation.location],
	verifyAuth.user,
	donationController.donate,
	function(req, res) {
		res.render('pages/index', { title: 'User' , userLogged : req.session.userId});
	}
);


module.exports = router;
