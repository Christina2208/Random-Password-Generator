// Arrays created for available user options
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

var promptResult;
var randomLetters = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");

// Write password to the #password input
function writePassword() {
  generatePassword();
  document.querySelector("#password").innerHTML=randomLetters;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
clearBtn.addEventListener("click", clearPassword);
function generatePassword() {

alert("Please choose the following criteria for your password.");
var characters = Number(prompt("Choose the length of your password, 8-128 characters."));
var uppercase = confirm("Choose if you want to include uppercase letters.")
var lowercase = confirm("Choose if you want to include lowercase letters.")
var numbers = confirm("Choose if you want to include numeric values.")
var special = confirm("Choose if you want to include special characters.")

// created if/ else if statements for all the user choices. 
if (uppercase && lowercase && numbers && special) {
  promptResult = promptA;
} else if (uppercase && lowercase && numbers) {
  promptResult = promptB;
} else if (lowercase && numbers && special) {
  promptResult = promptC;
} else if (uppercase && numbers && special) {
  promptResult = promptD;
} else if (uppercase && lowercase && special) {
  promptResult = promptE;
} else if (uppercase && lowercase) {
  promptResult = promptF;
} else if (uppercase && numbers) {
  promptResult = promptG;
} else if (uppercase && special) {
  promptResult = promptH;
} else if (lowercase && numbers) {
  promptResult = promptI;
} else if (lowercase && special) {
  promptResult = promptJ
} else if (numbers && special) {
  promptResult = promptK;
} else if (uppercase) {
  promptResult = uppercaseArray;
} else if (lowercase) {
  promptResult = lowercaseArray;
} else if (numbers) {
  promptResult = numbersArray;
} else if (special) {
  promptResult = specialArray;
} else {
  alert("Please select criteria")
}

for(var i=0; i < characters; i++) {
  var passGen = Math.floor(Math.random()* promptResult.length);
  randomLetters+=promptResult[passGen];
}
}
// function for clear button
function clearPassword() {
  document.querySelector("#password").innerHTML= ""
}
// ^ add a clear text content , replace or remove aimed at text content.