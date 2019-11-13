function login() {
	var user_name = document.getElementById('id_username').value;
	var password = document.getElementById('id_password').value;

	var data = {
		user_name:user_name,
		password:password
	}

	axios.post('https://powerful-brushlands-89819.herokuapp.com/login',data)
		.then(function(res){
			console.log(res.data);

			if(res.data == "Noob"){
				alert('user not found');
			}else if(res.data.auth == true){
				alert('login successful')
				window.location.replace("../../../index.html");
			}else if(res.data.auth == false){
				alert('Wrong password');
			}
		});

}

function register() {
	console.log("register");


	var user_name = document.getElementById('id_username').value;
	var email = document.getElementById('id_email').value;
	var phone = document.getElementById('id_phone').value;
	var address = document.getElementById('id_address').value;
	var password = document.getElementById('id_password').value;

	var data = {
		user_name:user_name,
		password:password,
		email:email,
		phone:phone,
		address:address
	}


	if(user_name.length<5 || password.length<5){
		console.log("Invalid User name/password");
		alert("Invalid User name/password");
		return false;

	}else{
		axios.post('https://powerful-brushlands-89819.herokuapp.com/createuser',data)
		.then(function(res){
			console.log(res);
			if(res.data.task == true){
				alert('user is added');
				window.location.replace("../../../index.html");
				
			}
		});
	// body...

	}

	
}