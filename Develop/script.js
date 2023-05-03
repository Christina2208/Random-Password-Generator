// Assignment code here
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ["!","?","[","]","_","`","~",";",":","@","#","$","%","^","&","*","+","=",];

//variables for different user options
var promptA = uppercaseArray.concat(lowercaseArray).concat(numbersArray).concat(specialArray);
var promptB = uppercaseArray.concat(lowercaseArray).concat(numbersArray);
var promptC = lowercaseArray.concat(numbersArray).concat(specialArray);
var promptD = uppercaseArray.concat(numbersArray).concat(specialArray);
var promptE = uppercaseArray.concat(lowercaseArray).concat(specialArray);
var promptF = uppercaseArray.concat(lowercaseArray);
var promptG = uppercaseArray.concat(numbersArray);
var promptH = uppercaseArray.concat(specialArray);
var promptI = lowercaseArray.concat(numbersArray);
var promptJ = lowercaseArray.concat(specialArray);
var promptK = numbersArray.concat(specialArray);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
alert("Please choose the following criteria for your password.");
var characters = prompt("Choose the length of your password, 8-128 characters.");
var uppercase = prompt("Choose if you want to include uppercase letters.")
var lowercase = prompt("Choose if you want to include lowercase letters.")
var numbers = prompt("Choose if you want to include numeric values.")
var special = prompt("Choose if you want to include special characters.")



// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
