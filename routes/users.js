const express = require('express'),
	router = express.Router(),
	userController = require('../controllers/user'),
	verifyAuth  = require('./middlewares/verifyAuth'),
	validation = require('./middlewares/validations');


/* GET users listing. */
router.get('/',
	function(req, res) {
		res.render('index', { title: 'Users' });
	}
);



module.exports = router;
