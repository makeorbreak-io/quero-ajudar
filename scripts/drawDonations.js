const Op = Sequelize.Op,
	Donation = require('../models/index').Donation,
	User = require('../models/index').User,
	Organization = require('../models/index').Organization,
	Headquarter = require('../models/index').Headquarter;

function getLastWeek(){
	var today = new Date();
	var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
	return lastWeek ;
};

function getToday(){
	var today = new Date();
	var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	return lastWeek ;
};

module.exports = function(){
	console.log('Vou correr manos!');
	Donation
		.findAll({
			where:  {
				[Op.and]: [
					{
						organizationId: {
							[Op.eq] : null
						}
					},
					{
						campaignId: {
							[Op.eq] : null
						}
					},
					{
						createdAt: {
							/*[Op.lt]: getToday(),*/
							[Op.gt]: getLastWeek()
						}
					}
				]
			},
			include: [{
				model: User,
				as: 'user'
			}]
		})
		.then(donations => {
			Organization
				.findAll({
					include: [{
						model: Headquarter,
						as: 'headquarters'
					}]
				})
				.then(organizations => {
					//console.log(organizations);
					donationsMap = {};
					donations.forEach(function (donation) {
						var key = donation.category + '' + donation.location;
						var value = donationsMap[key];
						if (value) {
							value.amount += donation.amount;
							value.users.push(donation.user);
							value.donations.push(donation);
						} else {
							value = {
								amount: donation.amount,
								ratingTotal: 0,
								users: [donation.user],
								donations: [donation],
								organizations: []
							};
						}
						donationsMap[key] = value;
						console.log(donationsMap);
					});

					console.log(donationsMap);

					organizations.forEach(function (organization) {
						// no category, no location
						var key = 'nullnull';
						var value = donationsMap[key];
						if (value) {
							value.ratingTotal += organization.dataValues.rating;
							value.organizations.push(organization);
							donationsMap[key] = value;
						}
						// category, no location
						key = organization.dataValues.category + 'null';
						value = donationsMap[key];
						if (value) {
							value.ratingTotal += organization.dataValues.rating;
							value.organizations.push(organization);
							donationsMap[key] = value;
						}
						(organization.headquarters).forEach(function (headquarter) {
							// no category, location
							key = 'null'+ headquarter.location;
							value = donationsMap[key];
							if (value) {
								value.ratingTotal += organization.dataValues.rating;
								value.organizations.push(organization);
								donationsMap[key] = value;
							}
							// category, location
							key = organization.category + '' + headquarter.location;
							value = donationsMap[key];
							if (value) {
								value.ratingTotal += organization.dataValues.rating;
								value.organizations.push(organization);
								donationsMap[key] = value;
							}
						});
					});
					// finished map of donations
					console.log(donationsMap);
					var organizationsMap = {};
					var donationsOrganizations = {};

					console.log('1234');
					console.log(donationsMap);
					Object.keys(donationsMap).forEach(function (k) {
						console.log('gfdshibnj');
						Object.keys(donationsMap[k].organizations).forEach(function (k1) {
							console.log('tretretrw');
							var organization = donationsMap[k].organizations[k1];
							console.log(organization);
							var key = organization.id;
							var value = organizationsMap[key];
							var amount = donationsMap[k].amount * (organization.dataValues.rating / donationsMap[k].ratingTotal);
							if (value) {
								organizationsMap[key] += amount
							} else {
								organizationsMap[key] = amount;
							}

							var BreakException = {};

							try {
								Object.keys(donationsMap[k].donations).forEach(function (k2) {
									var donation = donationsMap[k].donations[k2];
									console.log(donation);
									console.log(amount);
									var delta;
									if(donation.dataValues.amount >= amount){
										donation.dataValues.amount -= amount;
										delta = amount;
										amount = 0;
									} else {
										donation.dataValues.amount = 0;
										delta = donation.dataValues.amount;
										amount -= donation.dataValues.amount;
									}
									console.log(donation);
									console.log(amount);
									key = donation.dataValues.id;
									value = donationsOrganizations[key];
									if (value) {
										donationsOrganizations[key].push({organization: organization.dataValues.id, amount: delta});
									}else{
										donationsOrganizations[key] = [{organization: organization.dataValues.id, amount: delta}];
									}
									if(amount > 0){
										delete donationsMap[k].donations[k2];
									}else {
										throw BreakException;
									}
								});
							} catch (e) {
								//if (e !== BreakException) throw e;
								console.log('sai');
							}
						});
					});
					// { donationId : [{organizationId1, amount1}] , ...}
					console.log(donationsOrganizations);
					// { organizationId : amount_to_be_donated , ...}
					console.log(organizationsMap);

					Object.keys(donationsOrganizations).forEach(function (donationId) {
						console.log(donationId);
						var donationOrganizations = donationsOrganizations[donationId];
						donationOrganizations.forEach(function (donation) {
							console.log(donation);
							sequelize.query("INSERT INTO `DonationsOrganizations` (`donationId`, `organizationId`, `amount`, `createdAt`, `updatedAt`) VALUES (" + donationId + ", " + donation.organization+ ", " + donation.amount + ", " + new Date() + ", "+ new Date() + ")", { type: sequelize.QueryTypes.INSERT})
								.then(users => {
									// We don't need spread here, since only the results will be returned for select queries
								})
						});
					});
				})
				.catch(err => {
					return;
				});
		})
		.catch(err => {
			return;
		});
};