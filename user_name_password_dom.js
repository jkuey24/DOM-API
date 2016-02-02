// User ID and password cannot be the same

function userName(){
    var userInput = document.getElementById("name").value;
    alert(userInput);

};

function passwordId(){
  var passwordInput =
  document.getElementById("password").value;
  alert(passwordInput);
};

function comparePwId(){

}
// User ID and password have to be at least six characters long
// User ID cannot contain the following characters: !#$
// Password has to contain at least one of: !#$
// Password cannot be "password"
// Password has to contain at least one digit
// Password has to contain a lower and an uppercase letter (hint: use toUpperCase or toLowerCase)
// Write a main method that
