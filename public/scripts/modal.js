$(document).ready(function(){


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
			url: '/api/users/register',
			data: {
				email: $('#registerEmail').val(),
				firstName: $('#registerFirstName').val(),
				lastName: $('#registerLastName').val(),
				password: $('#registerPassword').val(),
				passwordConfirmation: $('#registerPasswordConfirmation').val()
			},
			dataType: 'json',
			success: function(data){
				alert(data);
			}
		});
	});

	$('#doLogin').click(function(){
		$.ajax({
			type: 'POST',
			url: '/api/users/login',
			data: {
				email: $('#loginEmail').val(),
				password: $('#loginPassword').val()
			},
			dataType: 'json',
			success: function(data){
				alert(data);
			}
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

});