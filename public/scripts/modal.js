$(document).ready(function(){

	var goDonationAfterLogin = false;

	$('#registerBtn').click(function(){
		$('#loginModal').css('display','none');
		$('#registerModal').css('display','block');
	});

	$('#authenticationModal').on('hide.bs.modal', function () {

		$('#loginModal').css('display','block');
		$('#registerModal').css('display','none');
	});

	$('#doRegister').click(function(){

		$.post('/api/users/register', {
			email: 'telmo.20@hotmail.com',
			firstName: 'Telmo',
			lastName: 'Barros',
			password: 'C@rneiro20',
			passwordConfirmation: 'C@rneiro20'
		})
			.done(function () {
				alert('gud');
			})
			.fail(function () {
				alert('bad');
			});
	});

	$('#doLogin').click(function(){
		$.post('/api/users/login', {email: 'diogoreis@gmail.com', password: 'Diogoreis18!'})
			.done(function () {
				alert('gud');
			})
			.fail(function () {
				alert('bad');
			});
	});

	$('.goToQuantity').click(function () {
		$('#quantityContainer').css('display','block');
		$('#categoryContainer').css('display','none');
		$('#locationContainer').css('display','none');
	});

	$('.goToCategory').click(function () {
		$('#quantityContainer').css('display','none');
		$('#categoryContainer').css('display','block');
		$('#locationContainer').css('display','none');
	});

	$('.goToLocation').click(function () {
		$('#quantityContainer').css('display','none');
		$('#categoryContainer').css('display','none');
		$('#locationContainer').css('display','block');
	});
	$('.goToAuthenticate').click(function () {
		goDonationAfterLogin = true;
		$('#donationModal').modal('toggle');
		$('#authenticationModal').modal('toggle');
	});

});