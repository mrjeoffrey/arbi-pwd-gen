// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define generatePassword
function generatePassword() {
  console.log('Does this work?')
// 1. Prompt user for password criteria
//    a. Length 8 - 128 char
//    b. lowercase
//    c. uppercase
//    d. numbers
//    e. special characters
// 2. Validate input
// 3. Generate password based on criteria
// 4. Display password


// remove undefined  
  return "generated password here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
