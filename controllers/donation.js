const { validationResult } = require('express-validator/check'),
	Op = Sequelize.Op,
	Donation = require('../models/index').Donation;

module.exports = {
	donateOrganization: function(req, res, next) {
		const errors = validationResult(req);
		console.log(errors);
		if (!errors.isEmpty()) {
			res.status(400).json({errors: errors.mapped(), errorCode: 106}); //106 -> Error in input validation
		} else {
			Donation
				.create({
					amount: req.body.amount,
					userId: req.session.userId,
					organizationId: req.body.id
				}).then(donation => {
					next();
				})
				.catch(err =>{
					res.status(500).json();
				});
		}
	},
	donateCampaign: function(req, res, next) {
		const errors = validationResult(req);
		console.log(errors);
		if (!errors.isEmpty()) {
			res.status(400).json({errors: errors.mapped(), errorCode: 106}); //106 -> Error in input validation
		} else {
			Donation
				.create({
					amount: req.body.amount,
					userId: req.session.userId,
					campaignId: req.body.id
				})
				.then(donation => {
					next();
				})
				.catch(err =>{
					console.log(err);
					res.status(500).json();
				});
		}
	},
	donate: function(req, res, next){
		const errors = validationResult(req);
		console.log(errors);
		if(!errors.isEmpty()){
			res.status(400).json({errors: errors.mapped(), errorCode: 106}); //106 -> Error in input validation
		} else {
			Donation
				.create({
					amount: req.body.amount, userId: req.session.userId, category: req.body.category, location: req.body.location
				})
				.then(donation=>{
					next();
				})
				.catch(err=>{
					console.log(err);
					res.status(500).json();
				});
		}
	},
	retrieveHistory: function(req, res, next){
		Donation
			.findOne({
				where:{
					userId: req.session.userId
				}
			})
			.then(donations=>{
				res.locals.donations = donations;
				next();
			})
			.catch(err=>{
				res.status(500).json();

			});
	}
};