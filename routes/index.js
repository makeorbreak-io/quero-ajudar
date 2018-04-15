var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('pages/index', { title: 'Express' , userLogged : req.session.userId, categories: config.categories, locations: config.locations});
});

module.exports = router;
