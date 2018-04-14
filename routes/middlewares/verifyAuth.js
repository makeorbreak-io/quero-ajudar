module.exports = {
	user(req, res, next) {
		if(req.session.userId){
			console.log('BOOOOOOAS');
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