
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
  	var fLastN = document.getElementById("fLastN");
  	var fPassword = document.getElementById("fPassword");
  	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
  	var errorLastN = document.getElementById("errorLastN");
  	var errorPassword = document.getElementById("errorPassword");
  	var errorPhone = document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.length < 3 || !validateLetters(fName.value)){
		error++;
		errorName.style.display = "block";
		fName.style.backgroundColor = "lightcoral";
		fName.style.color = "white";
	} else {
		errorName.style.display = "none";
		fName.style.backgroundColor = "lightgreen";
		fName.style.color = "white";
	}

	if(fEmail.value == "" || fEmail.value.length < 3 || !validateMail(fEmail.value)){
		error++;
		errorEmail.style.display = "block";
		fEmail.style.backgroundColor = "lightcoral";
		fEmail.style.color = "white";
	} else {
		errorEmail.style.display = "none";
		fEmail.style.backgroundColor = "lightgreen";
		fEmail.style.color = "white";
	}

	if(fAddress.value == "" || fAddress.value.length < 3){
		error++;
		errorAddress.style.display = "block";
		fAddress.style.backgroundColor = "lightcoral";
		fAddress.style.color = "white";
	} else {
		errorAddress.style.display = "none";
		fAddress.style.backgroundColor = "lightgreen";
		fAddress.style.color = "white";
	}

	if(fLastN.value == "" || fLastN.value.length < 3 || !validateLetters(fLastN.value)){
		error++;
		errorLastN.style.display = "block";
		fLastN.style.backgroundColor = "lightcoral";
		fLastN.style.color = "white";
	} else {
		errorLastN.style.display = "none";
		fLastN.style.backgroundColor = "lightgreen";
		fLastN.style.color = "white";
	}

	if(fPassword.value == "" || fPassword.value.length < 3 || !validateLettersNumbers(fPassword.value)){
		error++;
		errorPassword.style.display = "block";
		fPassword.style.backgroundColor = "lightcoral";
		fPassword.style.color = "white";
	} else {
		errorPassword.style.display = "none";
		fPassword.style.backgroundColor = "lightgreen";
		fPassword.style.color = "white";
	}

	if(fPhone.value == "" || fPhone.value.length < 3 || !validateNumbers(fPhone.value)){
		error++;
		errorPhone.style.display = "block";
		fPhone.style.backgroundColor = "lightcoral";
		fPhone.style.color = "white";
	} else {
		errorPhone.style.display = "none";
		fPhone.style.backgroundColor = "lightgreen";
		fPhone.style.color = "white";
	}

	//////
	
	/*if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}*/

	
}

function validateLetters(string) {
	return /^[a-zA-Z]+$/.test(string);
}

function validateNumbers(string) {
	return /^[0-9]+$/.test(string);
}

function validateLettersNumbers(string) {
	return /^[a-zA-Z0-9]+$/.test(string);
}

function validateMail(string) {
	return /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(string);
}
