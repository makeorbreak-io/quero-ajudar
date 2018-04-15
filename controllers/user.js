const { validationResult } = require('express-validator/check'),
	Op = Sequelize.Op,
	bcrypt = require('bcrypt'),
	User = require('../models/index').User,
	Donation = require('../models/index').Donation;

module.exports = {

	authenticate(req, res, next) {
		const errors = validationResult(req);
		console.log(errors);
		if (!errors.isEmpty()) {
			res.status(400).json({errors: errors.mapped(), errorCode: 106}); //106 -> Error in input validation
		} else {
			User
				.findOne({
					where: {
						email: req.body.email
					}
				})
				.then(user => {
					if(user){
						if (bcrypt.compareSync(req.body.password, user.password)) {
							res.locals.user = user;
							next();
						}
						else {
							res.status(401).json();
						}
					}
				})
				.catch(err => {
					res.status(500).json();
				});
		}
	},
	register: function (req, res, next) {
		const errors = validationResult(req);
		console.log(errors);
		if (!errors.isEmpty()) {
			res.status(400).json({errors: errors.mapped(), errorCode: 106}); //106 -> Error in input validation
		} else {
			User
				.findOne({
					where: {
						email: req.body.email
					}
				})
				.then(user => {
					console.log(user);
					if (!user) {
						var hash = bcrypt.hashSync(req.body.password, 10);
						User
							.create({
								email: req.body.email,
								password: hash,
								firstName: req.body.firstName,
								lastName: req.body.lastName,
								activated: true,
								disabled: false
							})
							.then(user => {
								console.log(user);
								res.locals.user = user;
								next();
							})
							.catch(err => {
								console.log(err);
								res.status(500).json();
							});
					} else {
						res.status(400).json();
					}
				})
				.catch(err => {
					console.log(err);
					res.status(500).json();
				});
		}
	},
	retrieve: function(req, res, next){
		User
			.findOne({
				where: {
					id: req.session.userId
				}
			})
			.then(user => {
				res.locals.user = user;
				next();
			})
			.catch(err=>{
				res.status(500).json();
			});
	}
};