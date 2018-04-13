module.exports = {
	user(req, res, next) {
		if(req.session.user){
			next();
		} else {
			res.status(401).redirect('/');
		}

	},
	admin(req, res, next) {
		if(req.session.isAdmin){
			next();
		} else {
			res.status(401).redirect('/');
		}
	}
};