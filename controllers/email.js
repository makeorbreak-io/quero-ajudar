const nodemailer = require('nodemailer');

exports.sendRegisterEmail = function(user){
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport(config.mail);

	// setup email data with unicode symbols
	let mailOptions = {
		from: '"QueroAjudar.pt" <' + config.mail.auth.user + '>', // sender address
		to: user.email, // list of receivers
		subject: 'Obrigado por Querer Ajudar!', // Subject line
		text: 'Bem-Vindo!\n' +
		'Caro ' + user.firstName + ' ' + user.lastName + ',\n' +
		'\n' +
		'A sua nova conta na plataforma QueroAjudar.pt foi criada. Bem-Vindo á comunidade!\n' +
		'De agora em diante, por favor, faça o login usando este endereço de email e a password que definiu no registo.\n' +
		'Se quiser fazer alguma alteração á sua conta por favor dirija-se ao nosso website www.queroajudar.pt.\n' +
		'\n' +
		'Obrigado novamente por se registar e por fazer parte daqueles que desejam o melhor do outro e que querem ajudar.', // plain text body
		html: '<b>Bem-Vindo!</b><br>' +
		'Caro ' + user.firstName + ' ' + user.lastName + ',<br>' +
		'<br>' +
		'A sua nova conta na plataforma QueroAjudar.pt foi criada. Bem-Vindo á comunidade!<br>' +
		'De agora em diante, por favor, faça o login usando este endereço de email e a password que definiu no registo.<br>' +
		'Se quiser fazer alguma alteração á sua conta por favor dirija-se ao nosso website <a href="http://www.queroajudar.pt">www.queroajudar.pt</a>.<br>' +
		'<br>' +
		'Obrigado novamente por se registar e por fazer parte daqueles que desejam o melhor do outro e que querem ajudar.' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);
	});
};

exports.sendAutomaticDonationEmail = function(donation){
	console.log('EMAIL CONTROLLER');
	console.log(donation);
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport(config.mail);

	var organizationsPlainText = '', organizationsHtml = '';
	var totalAmount = 0;
	(donation.organizations).forEach(function (organization) {
		organizationsPlainText += organization.name + '\n' + organization.description + '\n\nValor: ' + organization.amount + ' €\n';
		organizationsHtml += '<a href="http://www.queroajudar.pt/associacoes/' + organization.urlName + '"><h3>' + organization.name + '</h3><a><br>' + organization.description + '<br><br><h4>Valor: ' + organization.amount+' €</h4><br>';
		totalAmount += organization.amount;
	});

	// setup email data with unicode symbols
	let mailOptions = {
		from: '"QueroAjudar.pt" <' + config.mail.auth.user + '>', // sender address
		to: donation.user.email, // list of receivers
		subject: 'A sua doação já foi entregue! Veja quem ajudou esta semana', // Subject line
		text: 'Olá ' + donation.user.firstName +' ' + donation.user.lastName +'!\n' +
		'\n' +
		'Muito obrigado pela sua doação realizada a ' + donation.user.date + '. A sua doação de ' + totalAmount + ' euros foi entregue com sucesso ás seguintes Instituições, aproveite para aprender um pouco mais acerca delas:\n' +
		'\n' +
		organizationsPlainText +
		'Mais uma vez, muito obrigado pela sua contribuição. Esperemos voltar a contar consigo.' +
		'Até breve!' +
		'<br>' +
		'Obrigado novamente por se registar e por fazer parte daqueles que desejam o melhor do outro e que querem ajudar.', // plain text body
		html: 'Olá ' + donation.user.firstName +' ' + donation.user.lastName +'!<br>' +
		'<br>' +
		'Muito obrigado pela sua doação realizada a ' + donation.user.date + '. A sua doação de ' + totalAmount + ' euros foi entregue com sucesso ás seguintes Instituições, aproveite para aprender um pouco mais acerca delas:<br>' +
		'<br>' +
		organizationsHtml +
		'Mais uma vez, muito obrigado pela sua contribuição. Esperemos voltar a contar consigo.' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);
	});
};

exports.sendWinnerEmail = function(user, prize){
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport(config.mail);

	// setup email data with unicode symbols
	let mailOptions = {
		from: '"QueroAjudar.pt" <' + config.mail.auth.user + '>', // sender address
		to: user.email, // list of receivers
		subject: 'Parabéns ganhou o prémio mensal!', // Subject line
		text: 'Bem-Vindo, parabéns!!!\n' +
        'Caro ' + user.firstName + ' ' + user.lastName,
		html: '<h1>Bem-Vindo, parabéns!</h1><br>' +
        'Caro ' + user.firstName + ' ' + user.lastName
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);
	});
};
