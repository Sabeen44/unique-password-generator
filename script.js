//psuedocode
// USER_SIDE
//user clicks button
//user prompted 1) Desired length of password(8-128)
//user enters desired length
//user prompted for 1st character type 2)include number?
//user prmpted for 2nd character type 3)include uppercase?
//user prmpted for 2nd character type 3)include lowercase?
//user prmpted for 2nd character type 3)include symbols?
//user recieves a unique pw

//CODE SIDE
//create list of all possible characters/numbers/symbols
//button click sends a series of prompt alerts
//choose randomly from the list according to promt answers
//generate password

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
