var password = document.querySelector(".passwords")
var buttonEl1 = document.querySelector("#buttonEl1")
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    

function genPassword(){
var password = "";
    var passwordLength = 12;
    for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
    
   }

   buttonEl1.innerText = password
   console.log(password);
   console.log(buttonEl1.value);
   
   
}

