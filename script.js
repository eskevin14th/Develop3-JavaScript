// Assignment Code
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SpecialCharacters =['!', '@', '#', '$', '%', '^', '&', '*', '+', '?'];
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
function getpasswordscriteria(){
var pass = prompt("how many characters would you like in your password?");
var userChoseNumbers = confirm("would you like numbers in your password?");
var userChoseSpecialCharacters = confirm("would you like special characters in your password?");
var lowerCase = confirm("would you like lower case in your password?");
var upperCase = confirm("would you like upper case in your password?");
var options = {
  userChoseNumbers: userChoseNumbers
}
return options;
}
function createRandom(length) {
var randomNum = Math.floor(Math.random() * length);
return randomNum;
}
function generatePassword() {
  var userchose = getpasswordscriteria();
  var availablechars = [];
 var passwordArr = [];
  if(userchose.userChoseNumbers){
    availablechars = availablechars.concat(numbers).concat(SpecialCharacters).concat(lowerCase).concat(upperCase);
  }
  for(var i = 0; i < 128; i++){
  passwordArr.push(availablechars[createRandom(availablechars.length)])
  }
   return passwordArr.join("")
}
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
white_check_mark
eyes
raised_hands














