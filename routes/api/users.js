const express = require('express'),
	router = express.Router(),
	userController = require('../../controllers/user'),
	verifyAuth  = require('../middlewares/verifyAuth'),
	validation = require('../middlewares/validations');

/* POST login user. */
router.post('/login',
	[ validation.email,
		validation.password ],
	userController.authenticate,
	function(req, res) {
		if(res.locals.user){
			req.session.email = res.locals.user.email;
			req.session.userId = res.locals.user.id;
			res.cookie('userId', res.locals.user.id).cookie('email', res.locals.user.email).status(200).send(); /* TODO CHANGE THIS TO SERVER */
		}else {
			res.status(400).send();
		}
	}
);

/* POST register user. */
router.post('/register',
	[ validation.email,
		validation.password,
		validation.firstName,
		validation.lastName ],
	userController.register,
	function(req, res) {
		if(res.locals.user){
			req.session.user = res.locals.user.username;
			req.session.userId = res.locals.user.id;
			res.cookie('userId', res.locals.user.id).cookie('email', res.locals.user.email).status(200).send(); /* TODO CHANGE THIS TO SERVER */
		} else{
			res.status(200).send();
		}
	}
);

/* GET users donation history. */
router.get('/history',
	verifyAuth.user,
	userController.retrieveHistory,
	function(req, res) {
		if(res.locals.donations){
			res.status(200).send(res.locals.donations);
		} else {
			res.status(400).send();
		}
	}
);
module.exports = router;
