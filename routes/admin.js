const express = require('express'),
	router = express.Router(),
	userAdminController = require('../controllers/userAdmin'),
	verifyAuth  = require('./middlewares/verifyAuth'),
	validation = require('./middlewares/validations'),
	drawDonations = require('../scripts/drawDonations');

/* POST login user. */
router.post('/login',
	[ validation.email,
		validation.password ],
	//userAdminController.authenticate,
	function(req, res) {
		if(res.locals.user){
			req.session.email = res.locals.user.email;
			req.session.userId = res.locals.user.id;
			req.session.isAdmin = res.locals.user.isAdmin;
			res.cookie('userId', res.locals.user.id).cookie('email', res.locals.user.email).cookie('isAdmin', res.locals.user.isAdmin).status(200).redirect('/admin/dashboard'); /* TODO CHANGE THIS TO SERVER */
		}else {
			res.status(400).redirect('/admin');
		}
	}
);

/* GET login admin. */
router.get('/',
	function(req, res) {
		res.render('pages/admin/index', { title: 'Admin', userLogged: false });
	}
);

/* GET dashboard admin. */
router.get('/dashboard',
	function(req, res) {
		res.render('pages/admin/dashboard/index', { title: 'Admin', userLogged: false });
	}
);



/* GET drawDonations */
router.post('/draw_donations',
	function(req, res) {
		drawDonations();
		res.redirect('/');
	}
);

module.exports = router;
