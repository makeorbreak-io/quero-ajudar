const { validationResult } = require('express-validator/check'),
	Op = Sequelize.Op,
	bcrypt = require('bcrypt'),
	User = require('../models/index').UserAdmin;

module.exports = {

	authenticate(req, res, next) {
		next()
	}
};