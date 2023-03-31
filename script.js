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
//create lists of all characters/numbers/symbols
//button click sends a series of prompt alerts
//choose randomly from the lists according to promt answers
//generate password

// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwLength;

var passwordKey = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!#$%&'",
};

var buildPassword = "";

// Write password to the #password input
function writePassword() {
  var pwNum = confirm("Do you want to include Numbers?");
  var pwUpper = confirm("Do you want to include UpperCase Letters?");
  var pwLower = confirm("Do you want to include LowerCase Letters?");
  var pwSymbol = confirm("Do you want to include special characters?");
  var password = generatePassword();


while (buildPassword.length < pwLength) {
    var selection = Math.floor(Math.random() * 4);
  switch (selection) {
    case 0:
      if (pwNum === true) {
        var secureNum =
          passwordKey.numbers[
            Math.floor(Math.random() * passwordKey.numbers.length)
          ];

        buildPassword = buildPassword + secureNum;
      }
      break;
    case 1:
      if (pwUpper === true) {
        var secureUpChar =
          passwordKey.upperCase[
            Math.floor(Math.random() * passwordKey.upperCase.length)
          ];
        buildPassword = buildPassword + secureUpChar;
      }
      break;

    case 2:
      if (pwLower === true) {
        var secureLowChar =
          passwordKey.lowerCase[
            Math.floor(Math.random() * passwordKey.lowerCase.length)
          ];
        buildPassword = buildPassword + secureLowChar;
      }
      break;
    case 3:
      if (pwSymbol === true) {
        var secureSymbol =
          passwordKey.symbols[
            Math.floor(Math.random() * passwordKey.symbols.length)
          ];
        buildPassword = buildPassword + secureSymbol;
      }
      break;

    default:
      alert("Please pick atleast one option");
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
