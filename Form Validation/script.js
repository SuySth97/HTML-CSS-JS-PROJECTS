let user = document.getElementById("username");
let pass = document.getElementById("password");

function validateForm(){
  if(user.value == ""){
    document.getElementById("user-error").innerHTML = "Username is empty!!!";
  }else if(user.value.length < 3){
    document.getElementById("user-error").innerHTML = "Username require mininum 3 characters";
  }

  if(pass.value == ""){
    document.getElementById("pass-error").innerHTML = "Password is empty!!!";
  }
}

