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
router.post('/todo',
	verifyAuth.user,
	[ validation.clientIdentifier,
		validation.password ],
	function(req, res, next) {
		res.send('respond with a resource');
	}
);

module.exports = router;
