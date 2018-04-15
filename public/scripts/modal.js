$(document).ready(function(){
	var goDonationAfterLogin = false;
	var goDonateAfterLogin = false;
	var isOrganization = false;
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
			email: $('#registerEmail').val(),
			firstName: $('#registerFirstName').val(),
			lastName: $('#registerLastName').val(),
			password: $('#registerPassword').val(),
			passwordConfirmation: $('#registerPasswordConfirmation').val()
		})
			.done(function () {
				$('#authenticationModal').modal('toggle');
				$('#headerBtn').attr('data-target', '#infoModal');
				$('#authenticateBtn').attr('id', 'nextBtn');
			})
			.fail(function () {
				alert('bad');
			});
	});
	$('#doLogin').click(function(){
		$.post('/api/users/login', {
			email: $('#loginEmail').val(),
			password: $('#loginPassword').val(),
		})
			.done(function () {
				$('#authenticationModal').modal('toggle');
				$('#headerBtn').attr('data-target', '#infoModal');
				$('#authenticateBtn').attr('id', 'nextBtn');
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
	$('#authenticateBtn1').click(function () {
		goDonateAfterLogin = true;
		$('#donationModal').modal('toggle');
		$('#authenticationModal').modal('toggle');
	});
	$('#nextBtn1').click(function () {
        $('#quantityContainer').css('display','none');
        $('#categoryContainer').css('display','none');
        $('#locationContainer').css('display','none');
		$('#checkDonationContainer1').css('display','block');
		$('#paymentContainer1').css('display','none');
	});
    $('.goToPayment1').click(function () {
        $('#quantityContainer').css('display','none');
        $('#categoryContainer').css('display','none');
        $('#locationContainer').css('display','none');
        $('#checkDonationContainer1').css('display','none');
        $('#paymentContainer1').css('display','block');
    });
	/*
	DONATE TO AN ORGANIZATION
	 */
	$('#authenticateBtn').click(function () {
		goDonateAfterLogin = true;
		$('#donateModal').modal('toggle');
		$('#authenticationModal').modal('toggle');
	});
	$('#nextBtn').click(function () {
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
		$('#paymentContainer').css('display','block');
	});
});