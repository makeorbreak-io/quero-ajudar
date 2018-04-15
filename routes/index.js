var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('pages/index', { title: 'Quero Ajudar' , userLogged : req.session.userId});
});

module.exports = router;
