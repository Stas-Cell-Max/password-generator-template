
document.addEventListener("DOMContentLoaded", function () {
   
   // Function to generate a password
   function generatePassword() {
     var length = getPasswordLength();
     if (length === null) {
       return ""; // User is canceled or entered invalid input
     }

     var characterTypes = getCharacterTypes();
     if (characterTypes.length === 0) {
       alert("You must select at least one character type.");
       return "";
     }

     var password = generateRandomPassword(length, characterTypes);
     return password;
   }

   // Function to prompt the user for the password length
   function getPasswordLength() {
     while (true) {
       var length = prompt("Enter the length of the password (8-128 characters):");

       if (length === null) {
         return null; // User canceled
       }

       var parsedLength = parseInt(length);

       if (!isNaN(parsedLength) && parsedLength >= 8 && parsedLength <= 128) {
         return parsedLength;
       } else {
         alert("Password length must be between 8 and 128 characters.");
       }
     }
   }

   // Function to prompt the user for the character types to include
   function getCharacterTypes() {
     var useLowercase = confirm("Include lowercase letters?");
     var useUppercase = confirm("Include uppercase letters?");
     var useNumeric = confirm("Include numbers?");
     var useSpecialChars = confirm("Include special characters?");

     var characterTypes = [];

     if (useLowercase) characterTypes.push("lowercase");
     if (useUppercase) characterTypes.push("uppercase");
     if (useNumeric) characterTypes.push("numeric");
     if (useSpecialChars) characterTypes.push("special");

     return characterTypes;
   }

   // Function to generate a random password based on Acceptance criteria
   function generateRandomPassword(length, characterTypes) {
     var charsets = {
       lowercase: "abcdefghijklmnopqrstuvwxyz",
       uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
       numeric: "0123456789",
       special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
     };

     let charset = "";

     for (var type of characterTypes) {
       charset += charsets[type];
     }

     let password = "";

     for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * charset.length);
       password += charset.charAt(randomIndex);
     }

     return password;
   } 

   // Select the "Generate Password" button
   var generateBtn = document.querySelector("#generate");

   // Attach a click event listener to the button to display the password
   generateBtn.addEventListener("click", displayPassword);

    // Function to display the generated password
   function displayPassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");
     passwordText.value = password;
   }
});
