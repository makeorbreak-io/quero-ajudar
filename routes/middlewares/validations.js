const { body } = require('express-validator/check');

exports.clientNumber =
	body('clientNumber',1061)
		.exists()
		.isLength({min: 10})
		.isLength({max: 10});

exports.password =
	body('password',1062)
		.exists()
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$@+!%*#?&])[0-9a-zA-Z$@+!%*#?&]{8,}$/, 'i'); //numbers, one lower-case, one upper-case, one special character ($@+!%*#?&)

exports.passwordConfirmation =
	body('passwordConfirmation', 1063)
		.exists()
		.custom((value, { req }) => value === req.body.password);

exports.via =
	body('via', 1064)
		.exists()
		.isIn(['email', 'sms']);

exports.token =
	body('token',1065)
		.exists();

exports.username =
	body('username',1066)
		.exists()
		.matches(/^[A-Za-z0-9_-]{3,50}$/,'i')
		.isLength({min: 3})
		.isLength({max: 50});

exports.clientIdentifier =
	body('clientIdentifier',1067)
		.exists()
		.isLength({min: 3})
		.isLength({max: 50});

exports.confirmationInfo =
	body('confirmationInfo',1068)
		.exists();

