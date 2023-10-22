document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", displayPassword);

  function displayPassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  function generatePassword() {
    const length = getPasswordLength();
    if (length === null) {
      return ""; // User canceled or entered invalid input
    }

    const characterTypes = getCharacterTypes();
    if (characterTypes.length === 0) {
      alert("You must select at least one character type.");
      return "";
    }

    const password = generateRandomPassword(length, characterTypes);
    return password;
  }

  function getPasswordLength() {
    while (true) {
      const length = prompt("Enter the length of the password (8-128 characters):");

      if (length === null) {
        return null; // User canceled
      }

      const parsedLength = parseInt(length);

      if (!isNaN(parsedLength) && parsedLength >= 8 && parsedLength <= 128) {
        return parsedLength;
      } else {
        alert("Password length must be between 8 and 128 characters.");
      }
    }
  }

  function getCharacterTypes() {
    const useLowercase = confirm("Include lowercase letters?");
    const useUppercase = confirm("Include uppercase letters?");
    const useNumeric = confirm("Include numbers?");
    const useSpecialChars = confirm("Include special characters?");

    const characterTypes = [];

    if (useLowercase) characterTypes.push("lowercase");
    if (useUppercase) characterTypes.push("uppercase");
    if (useNumeric) characterTypes.push("numeric");
    if (useSpecialChars) characterTypes.push("special");

    return characterTypes;
  }

  function generateRandomPassword(length, characterTypes) {
    const charsets = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeric: "0123456789",
      special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    };

    let charset = "";

    for (const type of characterTypes) {
      charset += charsets[type];
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  }
});