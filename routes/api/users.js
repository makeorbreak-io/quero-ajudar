const express = require('express'),
	router = express.Router(),
	userController = require('../controllers/user'),
	verifyAuth  = require('./middlewares/verifyAuth'),
	validation = require('./middlewares/validations');


/* GET users listing. */
router.get('/',
	function(req, res, next) {
		res.render('index', { title: 'Users' });
	}
);

/* GET users listing. */
router.post('/login',
	[ validation.username,
		validation.password ],
	userController.authenticate,
	function(req, res, next) {
		res.send('respond with a resource');
	}
);

/* GET users listing. */
router.post('/register',
	[ validation.password ],
	function(req, res, next) {
		res.send('respond with a resource');
	}
);

module.exports = router;
