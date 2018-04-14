$(document).ready(function(){
	$('#registerBtn').click(function(){
		$('#loginModal').css('display','none');
		$('#registerModal').css('display','block');
	});
	$('#authenticationModal').on('hide.bs.modal', function () {
		$('#loginModal').css('display','block');
		$('#registerModal').css('display','none');
	});
});