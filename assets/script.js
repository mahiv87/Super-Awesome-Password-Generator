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

// Variables with value of characterArray function
var abcUpper = characterArray(65, 90);
var abcLower = characterArray(97, 122);
var numbers = characterArray(48, 57);
var special = characterArray(33, 47);

// This function generates the password
function generatePassword() {
  
  // Criteria Prompts
  var pwLength = window.prompt("How long would you like password?" + "\nChoose from 8 to 128 characters.");

  // Conditional statement that alerts user if input is out of character range
  if (pwLength < 8 || pwLength > 128) {
    window.alert("Please choose from 8 to 128 characters. Try again!");
    var pwLength = window.prompt("How long would you like password?" + "\nChoose from 8 to 128 characters.");
  } 

  // Criteria continued
    var pwUpper = window.confirm("Use uppercase letters?");
    var pwLower = window.confirm("Use lowercase letters?");
    var pwNumbers = window.confirm("Use numbers?");
    var pwSpecial = window.confirm("Use special characters? !@# etc...");
  
  //   Variable equal to an array of charCodes
  var charCodes = [];

  //   Conditionals depending on users choice
  if (pwLower) charCodes = charCodes.concat(abcLower);
  if (pwUpper) charCodes = charCodes.concat(abcUpper);
  if (pwNumbers) charCodes = charCodes.concat(numbers);
  if (pwSpecial) charCodes = charCodes.concat(special);

  //   This loop randomly selects ASCII codes, depending on user choice, and returns as a string using .join method
  var pwArray = [];
  for (let i = 0; i < pwLength; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    pwArray.push(String.fromCharCode(characterCode));
  }
  return pwArray.join("");
}

// Function to create an array of ASCII codes in sequential order from lowest to highest
function characterArray(low, high) {
  var array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
