// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function createPassword(lenght) 
  let password = '';
  const chars = "*0123456789abcdefghijkImnopqrst uvwxyz!@#$%^&* ()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let passwordLength = length;

const array = new Uint32Array(length);
window.crypto.getRandomValues(array);

for (i=0; i<length; i++) {
  password += chars[array[i] % chars.length];

}

console.log(password);
return password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
