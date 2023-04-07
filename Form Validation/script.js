let user = document.getElementById("username");
let userError = document.getElementById("user-error");
let email = document.getElementById("email");
let emailError = document.getElementById("email-error");
let pass = document.getElementById("password");
let passError = document.getElementById("pass-error");
let flag = 1;

function validateForm() {
  if (user.value == "") {
    userError.innerHTML = "Username is empty!!!";
    userError.style.border = "1px solid red";
    userError.style.display = "block";
    user.focus();
    flag = 0;
  } else if (user.value.length < 3) {
    userError.innerHTML = "Username require min 3 char";
    flag = 0;
  } else {
    document.getElementById("user-error").innerHTML = "";
    flag = 1;
  }

  if (email.value == "") {
    emailError.innerHTML = "Provide your email address";
    emailError.style.border = "1px solid red";
    emailError.style.display = "block";
    email.focus();
    flag = 0;
  } else {
    emailError.innerHTML = "";
    flag = 1;
  }

  if (pass.value == "") {
    passError.innerHTML = "Password is empty!!!";
    passError.style.border = "1px solid red";
    passError.style.display = "block";
    pass.focus();
    flag = 0;
  } else {
    passError.innerHTML = "";
    flag = 1;
  }
  
  // if validation is satisfied
  if(flag){
    return true;
  }else{
    return false;
  }
}

