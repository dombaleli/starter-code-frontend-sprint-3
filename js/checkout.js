
// Exercise 6
function validate() {
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
    let fAddress = document.getElementById("fAddress");
    let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");  
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorEmail");  
	let errorPassword = document.getElementById("errorName");
	let errorPhone = document.getElementById("errorEmail");  
	
	//const RegExpEmail =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
	}
	if(fEmail.value == ""){
		error++;
	}
	if(fAddress.value == ""){
		error++;	
	}
	if(fLastN.value == ""){
		error++;
	}
	if(fPassword.value == ""){
		error++;
	}else{
	}
	if(fPhone.value == ""){
		error++;
	}

	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
