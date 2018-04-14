const { body } = require('express-validator/check');

exports.email =
	body('email', 1061)
		.exists();

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

exports.firstName =
	body('firstName', 1066)
		.exists();

exports.lastName =
	body('lastName', 1067)
		.exists();

exports.donation =
    body('donation', 1068)
    	.exists(); //TODO ONLY CONTAIN NUMBERS

exports.category =
    body('category', 1069); //TODO ONLY CONTAIN ENUM

exports.location =
    body('location', 10610); //TODO ONLY CONTAIN ENUM

exports.id =
    body('id', 10611)
    	.exists();//TODO ONLY CONTAIN NUMBERS