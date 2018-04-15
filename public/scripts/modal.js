$(document).ready(function(){
	var goDonationAfterLogin = false;
	var goDonateAfterLogin = false;
	$('#registerBtn').click(function(){
		$('#loginModal').css('display','none');
		$('#registerModal').css('display','block');
	});
	$('#authenticationModal').on('hide.bs.modal', function () {

		$('#loginModal').css('display','block');
		$('#registerModal').css('display','none');
	});
	$('#doRegister').click(function(){
		$.ajax({
			type: 'POST',
			url: 'api/users/register',
			data: {
				email: $('#registerEmail').val(),
				firstName: $('#registerFirstName').val(),
				lastName: $('#registerLastName').val(),
				password: $('#registerPassword').val(),
				passwordConfirmation: $('#registerPasswordConfirmation').val()
			}
		})
			.done(function(result){
				alert('ok');
			});
	});
	$('#doLogin').click(function(){
		$.post('/api/users/login', {email: 'diogoreis@gmail.com', password: 'Diogoreis18'})
			.done(function () {
			    alert('gud');
			})
			.fail(function () {
				alert('bad');
			});
	});
	/*
	DONATE TO RANDOM ORGANIZATION
	 */
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
	/*
	DONATE TO AN ORGANIZATION
	 */
	$('.goToAuthenticate1').click(function () {
		goDonateAfterLogin = true;
		$('#donateModal').modal('toggle');
		$('#authenticationModal').modal('toggle');
	});
	$('.checkDonation').click(function () {
		$('#checkDonationContainer').css('display','block');
		$('#quantityContainer1').css('display','none');
		$('#paymentContainer1').css('display','none');
	});
	$('.goToQuantity1').click(function () {
		$('#checkDonationContainer').css('display','none');
		$('#quantityContainer1').css('display','block');
		$('#paymentContainer1').css('display','none');
	});
	$('.goToPayment').click(function () {
		$('#checkDonationContainer').css('display','none');
		$('#quantityContainer1').css('display','none');
		$('#paymentContainer1').css('display','block');
	});
});