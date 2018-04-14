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
					amount: req.body.amount, userId: req.session.userId, organizationId: req.body.organizationId
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
					amount: req.body.amount, userId: req.session.userId, campaignId: req.body.campaignId
				}).then(donation => {
					next();
				})
				.catch(err =>{
					res.status(500).json();
				});
		}
	},
};