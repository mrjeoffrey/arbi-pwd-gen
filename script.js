// Arbi Password Generator will allow a user to obtain a random password via prompts based on user selected password criteria.

var generateBtn = document.querySelector("#generate");

//Criteria Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// User Input for Password
var inputLength = "";
var inputLowerCase;
var inputUpperCase;
var inputNumbers;
var inputSpecialChar;

// Define generatePassword
function generatePassword() {
// 1. Prompt user for password criteria
//  A. Confirm character length: 8 - 128 char range
    var inputLength = (prompt("Enter the character length for your password."));

    // Validate Input - Error if not between 8 - 128 character range.
    while (inputLength <= 7 || inputLength >= 129) {
      alert("Try again. Password length must be between 8 - 128 characters.");
      var inputLength = (prompt("Enter the character length for your password."));
    }

    // If user input in range, show length of password characters.
    alert("Password length will be " + inputLength + " characters long.");

//  B. Ask parameters     
      //  a. lowercase
      var inputLowerCase = confirm("Add lowercase characters? hit 'OK' to include lowercase characters. hit 'Cancel' to not include.");
      //  b. uppercase
      var inputUpperCase = confirm("Add UPPERCASE characters? hit 'OK' to include lowercase characters. hit 'Cancel' to not include.");
      //  c. numbers
      var inputNumbers = confirm("Add Number characters? hit 'OK' to include lowercase characters. hit 'Cancel' to not include.");
      //  d. special characters
      var inputSpecialChar = confirm("Add Special characters? hit 'OK' to include lowercase characters. hit 'Cancel' to not include.");

      // at least one of these must be accepted as 'OK'
      while (
        inputLowerCase    === false && 
        inputUpperCase    === false && 
        inputNumbers      === false &&
        inputSpecialChar  === false) {

          alert("One parameter must be selected. Try again and select at least 1 parameter.");

          // Ask user parameters again.
          var inputLowerCase = confirm("Add lowercase characters? hit 'OK' to include lowercase characters. hit 'Cancel' to not include.");
          var inputUpperCase = confirm("Add UPPERCASE characters? hit 'OK' to include lowercase characters. hit 'Cancel' to not include.");
          var inputNumbers = confirm("Add Number characters? hit 'OK' to include lowercase characters. hit 'Cancel' to not include.");
          var inputSpecialChar = confirm("Add Special characters? hit 'OK' to include lowercase characters. hit 'Cancel' to not include.");
          
        }

// 3. Generate password based on criteria
      // a. initialize key - use array
      var passwordKey = []

          // i. Add user-selected parameters to initialized key - use 'if' statements
          if (inputLowerCase) {passwordKey = passwordKey.concat(lowerCase)}
          if (inputUpperCase) {passwordKey = passwordKey.concat(upperCase)}
          if (inputNumbers) {passwordKey = passwordKey.concat(numbers)}
          if (inputSpecialChar) {passwordKey = passwordKey.concat(specialChar)}

      // b. Generate password based on length and key with for loop
      var newRandomPassword = ""

          // i. Loop through user-selected password preferences until the desired length met.
          for (var i = 0; i < inputLength; i++) {
            newRandomPassword = newRandomPassword + passwordKey[Math.floor(Math.random() * passwordKey.length)];
          }
      //c. Return the random string now known as new generated password.
      return newRandomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
