// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789"
  var symbol = "!@#$%^&*()"

  var passwordLength;
  var passwordSymbol;
  var passwordNumber;
  var passwordLower;
  var passwordUpper;

  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
}

// TODO: Generate PW function
function generatePassword() {
  // Prompt asking length of password
  var passwordLength = prompt("How many characters do you want your password to be?");
  while (passwordLength <= 8 || passwordLength >= 128) {
    if (passwordLength <= 7) {
      alert("Your password must contain more than 7 characters")
      passwordLength = prompt("How many characters do you want your password to be?");
    }
    else if (passwordLength >= 129) {
      alert("Your password must contain less than 129 characters")
      passwordLength = prompt("How many characters do you want your password to be?");
    }
    for (let i = password.length; i < passwordLength; i++) {
      var newPassword = userChoice[Math.floor(Math.random() * userChoice.length)];
    }
  }

  // CREATE A CONFIRM FOR LOWERCASE LETTERS
  var passwordLower = confirm("Do you want your password to contain lowercase letters? OK - YES; Cancel - NO");

  // CREATE A CONFIRM FOR UPPERCASE LETTERS
  var passwordUpper = confirm("Do you want your password to contain uppercase letters? OK - YES; Cancel - NO");

  // CREATE A CONFIRM FOR NUMBERS LETTERS
  var passwordNumber = confirm("Do you want your password to contain numbers? OK - YES; Cancel - NO");

  // CREATE A CONFIRM FOR UPPERCASE LETTERS
  var passwordSymbol = confirm("Do you want your password to contain symbols? OK - YES; Cancel - NO");

  while (passwordLower === false && passwordUpper === false && passwordNumber === false && passwordSymbol === false) {
    alert("You must choose at least one of the criteria (lower or upper case letters, numbers, or symbols)")
    var passwordLower = confirm("Do you want your password to contain lowercase letters? OK - YES; Cancel - NO");
    var passwordUpper = confirm("Do you want your password to contain uppercase letters? OK - YES; Cancel - NO");
    var passwordNumber = confirm("Do you want your password to contain numbers? OK - YES; Cancel - NO");
    var passwordSymbol = confirm("Do you want your password to contain symbols? OK - YES; Cancel - NO");
  }

  // lowercase
  var lower = "";
  var lowerArray = [];
  for (let i = 0; i < 26; i++) {
    lowerArray[i] = String.lower(lower + i);
  }

  // uppercase
  var upper = "";
  var upperArray = [];
  for (let i = 0; i < 26; i++) {
    upperArray[i] = string.upper(upper + i);
  }

  // number
  var number = "";
  var numberArray = [];
  for (let i = 0; i < 10; i++) {
    numberArray[i] = string.number(number + i);
  }

  var userChoice = []
  if (passwordLower === true) {
    password += lowerArray[Math.floor(Math.random() * lowerArray.length)];
  }
  if (passwordUpper === true) {
    password += upperArray[Math.floor(Math.random() * upperArray.length)];
  }
  if (passwordNumber === true) {
    password += numberArray[Math.floor(Math.random() * numberArray.length)]
  }
  if (passwordSymbol === true) {
    password += symbolArray[Math.floor(Math.random() * symbolArray.length)];
  }
  console.log(userChoice)


    passwordText.value = password;



}
