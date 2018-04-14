const express = require('express'),
	router = express.Router(),
	userController = require('../../controllers/user'),
	verifyAuth  = require('../middlewares/verifyAuth'),
	validation = require('../middlewares/validations');

/* GET users listing. */
router.post('/login',
	[ validation.email,
		validation.password ],
	userController.authenticate,
	function(req, res, next) {
		req.session.email = res.locals.user.email;
		req.session.userId = res.locals.user.id;
		res.cookie('email', res.locals.user.email).status('200').send('200'); /* TODO CHANGE THIS TO SERVER */
	}
);

/* GET users listing. */
router.post('/register',
	[ validation.email,
		validation.password,
		validation.firstName,
		validation.lastName ],
	userController.register,
	function(req, res, next) {
		if(res.locals.user){
			req.session.user = res.locals.user.username;
			req.session.userId = res.locals.user.id;
			res.cookie('name', user.name).cookie('user', user.email).status('200').send('200'); /* TODO CHANGE THIS TO SERVER */
		}
	}
);

/* GET users listing. */
router.post('/history',
    userController.retrieveHistory,
    function(req, res, next) {
        if(res.locals.user){
            req.session.user = res.locals.user.username;
            req.session.userId = res.locals.user.id;
            res.cookie('name', user.name).cookie('user', user.email).status('200').send('200'); /* TODO CHANGE THIS TO SERVER */
        }
    }
);
module.exports = router;
