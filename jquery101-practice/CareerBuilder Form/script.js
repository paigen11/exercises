$(document).ready(function(){

	$('sign-up-form').submit(function(){
		event.preventDefault();

		// 1. Enter names
		var name = $('.name').val();
		if(name == ''){
			$('.error-name').text("Name is a required field")
		}else{
			$('.error-name').html("")
		}

		// 2. Enter valid email address
		var email = $('.email').val();
		if(email != '@'){
			$('.error-email').html("This does not look like a valid email address")
		}else{
			$('.error-email').html('')
		}

		// 3. Confirm valid email address
		var email1 = $('.email').val();
		var email2 = $('.email-two').val();
		if((email1 !== email2) || (email2 = "")){
			$('.error-email').html("This does not look like a valid email address")
		}else{
			$('.error-email').html('')
		}
		// 4. Create a password 8 characters long
		var password = $('.password').val();
		if(password.length < 8){
			$('.error-password').html("Your password is not strong enough")
		}else{
			$('.error-password').html('')
		}
		
		// 5. Password hint
		$('.password')click(function(){
			$('.password-hint').html("Have at least 8 characters, and use 3 of the following: uppercase, lowercase, number, symbol")
		});

		// 6. Make sure passwords match
		var pass1 = $('.password').val();
		var pass2 = $('.password-two').val();
		if((pass1 !== pass2) || pass2 == ''){
			$('.error-password').html("Your password is not strong enough")
		}else{
			$('.error-password').html("")
		}

		// 7. Add valid phone number
		var phone = $('.phone').val();
		var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		if((phone != nums) && (phone.length < 10)){
			$('.phone').focus();
		}

		// 8. Add a city
		var city = $('.city').val();
		if(city == ""){
			$('.error-city').html("Please enter a city")
		}else{
			$('.error-city').html('')
		}

		// 9. Add valid zip code
		var zip = $('.zip').val();
		if(zip == ''){
			$('.error-zip').html("Please enter a zip code")
		}else{
			$('.error-zip').html('')
		}

	});
});