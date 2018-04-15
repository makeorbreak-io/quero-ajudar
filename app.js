try {
	config = require(process.env.CONFIG_PATH);
	process.env.NODE_ENV = config.environment;
	console.log(config);
} catch (e) {
	console.log(e);
	process.exit(1);
}

var createError = require('http-errors');
var express = require('express');
var i18n = require('./i18n');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');

var logger = require('morgan');
Sequelize = require('sequelize');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersRouteAPI = require('./routes/api/users');
var organizationsRouter = require('./routes/organizations');
var campaignsRouter = require('./routes/campaigns');
var partnersRouter = require('./routes/partners');
var adminRouter = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(i18n);


app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({
	limit: '50mb',
	extended: true,
	parameterLimit: 50000
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: config.secret,
	saveUninitialized: false,
	resave: false,
	maxAge: 3600000
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/users', usersRouteAPI);
app.use('/associacoes', organizationsRouter);
app.use('/campanhas', campaignsRouter);
app.use('/parceiros', partnersRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

var drawWinner = require('./scripts/drawWinner');
drawWinner();
/*var drawDonations = require('./scripts/drawDonations');
var CronJob = require('cron').CronJob;
new CronJob('00,15,30,45 * * * * *', drawDonations, null, true, 'America/Los_Angeles');*/

module.exports = app;
