// CREATE ACCOUNT

function signup(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;


if(name==="" || email==="" || password===""){

document.getElementById("signupMsg").innerHTML =
"Please fill all details ❌";

return;

}



let user = {

name:name,

email:email,

password:password

};



localStorage.setItem(
"user",
JSON.stringify(user)
);



document.getElementById("signupMsg").innerHTML =
"Account Created Successfully ✅";


setTimeout(()=>{

window.location.href="index.html";

},1500);



}







// LOGIN

function login(){


let email = document.getElementById("loginEmail").value;

let password = document.getElementById("loginPassword").value;



let user = JSON.parse(
localStorage.getItem("user")
);



if(user === null){

document.getElementById("loginMsg").innerHTML =
"No Account Found ❌";

return;

}




if(email===user.email && password===user.password){


localStorage.setItem(
"login",
"true"
);


window.location.href="dashboard.html";


}

else{


document.getElementById("loginMsg").innerHTML =
"Wrong Email or Password ❌";


}



}








// SHOW PASSWORD SIGNUP

function showPassword(){


let pass = document.getElementById("password");


if(pass.type==="password"){

pass.type="text";

}

else{

pass.type="password";

}


}






// SHOW PASSWORD LOGIN

function showLoginPassword(){


let pass = document.getElementById("loginPassword");


if(pass.type==="password"){

pass.type="text";

}

else{

pass.type="password";

}


}






// DASHBOARD DATA


let userData = JSON.parse(
localStorage.getItem("user")
);



if(userData){


let nameBox =
document.getElementById("userName");


let emailBox =
document.getElementById("userEmail");



if(nameBox){

nameBox.innerHTML =
"Hello, "+userData.name+" 👋";


}



if(emailBox){

emailBox.innerHTML =
userData.email;


}


}







// LOGOUT


function logout(){


localStorage.removeItem("login");


window.location.href="index.html";


}