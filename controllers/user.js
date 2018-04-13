const { validationResult } = require('express-validator/check'),
	Op = Sequelize.Op,
	bcrypt = require('bcrypt'),
	User = require('../models/index').User;

module.exports = {

	authenticate(req, res) {
		const errors = validationResult(req);
		console.log(errors);
		if (!errors.isEmpty()) {
			res.status(400).json({ errors: errors.mapped(), errorCode: 106 }); //106 -> Error in input validation
		} else{

		}
	}
};