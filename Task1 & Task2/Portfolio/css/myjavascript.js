
// function myFunction() {
//   var inpObj = document.getElementById("pno");
//   if (!inpObj.checkValidity()) {
//     document.getElementById("demo").innerHTML = inpObj.validationMessage;
//     document.getElementById("pno").style.borderColor="red"
//   } else {
//     document.getElementById("demo").innerHTML = "Success";
//      document.getElementById("pno").style.borderColor="green"
//   } 
// } 

// function nameValidation() {
//   var fn=document.getElementById('name').value;
//     if(fn == ""){
//         alert('Please Enter Name');
//         document.getElementById('name').style.borderColor = "red";
//         return false;
//     }else{
//         document.getElementById('name').style.borderColor = "green";
//     }
//     if (/^[0-9]+$/.test(document.getElementById("name").value)) {
//         alert("Name Contains Numbers!");
//         document.getElementById('name').style.borderColor = "red";
//         return false;
//     }else{
//         document.getElementById('name').style.borderColor = "green";
//     }
//     if(fn.length <2){
//         alert('Your Name is too Short');
//         document.getElementById('name').style.borderColor = "red";
//         return false;
//     }else{
//         document.getElementById('name').style.borderColor = "green";
//     }
//     function myFunction1() {
//   var x, text;

//   // Get the value of the input field with id="numb"
//   x = document.getElementById("pno").value;

//   // If x is Not a Number or less than one or greater than 10
//   if (isNaN(x) || x < 9999999999 || x > 1000000000) {
//     text = "Input not valid";
//   } else {
//     text = "Input OK";
//   }
//   document.getElementById("demo").innerHTML = text;
// }
// function validation()
// {
// 	var nam = document.getElementById("name").value;
// 	var nam = document.getElementById("phone").value;
// 	var nam = document.getElementById("email").value;
// 	var nam = document.getElementById("organization").value;
// 	var text;


// 	error_message.style.padding="10px";
	
	
// 	if (name.length<2) 
// 	{
// 		text="Not a valid name"
// 		error_message.innerHTML=text;
// 		//input.style.borderColor="red";
// 		return false;

// 	}
// 	if (isNaN(phone)|| phone<1000000000||phone>999999999) 
// 	{
// 		text="Not a valid phone number"
// 		error_message.innerHTML=text;
// 		//input.style.borderColor="red";
// 		return false;

// 	}
// 	if (email.indexOf("@")||email.indexOf(".")==-1)
// 	{
// 		text="Enter a valid email id"
// 		error_message.innerHTML=text;
// 		input.style.borderColor="red";
// 		return false;
// 	}
// 	if (organization.length==0) 
// 	{
// 		text="Please fill in your Organization Name"
// 		error_message.innerHTML=text;
// 		//input.style.borderColor="red";
// 		return false;
// 	}
// 	if (message.length==0) 
// 	{
// 		text="Please type in your message"
// 		error_message.innerHTML=text;
// 		//input.style.borderColor="red";
// 		return false;
// 	}





// }

(function() {
    
    var input              = document.getElementById('name');
    var form               = document.getElementById('myform');
    var elem               = document.createElement('div');
            elem.id            = 'notify';
            elem.style.display = 'none';

            form.appendChild(elem);

    input.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
            input.className    = 'invalid animated shake';
            elem.textContent   = 'Name should only contain alphabets';
            elem.className     = 'error';
            elem.style.display = 'block';
        }
    });

    input.addEventListener('input', function(event){
        if ( 'block' === elem.style.display ) {
            input.className = '';
            elem.style.display = 'none';
        }
    });

})();