
// var startQuizBtnEl = document.querySelector("#startQuiz");

// var questions = [
//     {
//       title: "Commonly used data types DO NOT include:",
//       choices: ["strings", "booleans", "alerts", "numbers"],
//       answer: "alerts"
//     },
//     {
//       title: "The condition in an if / else statement is enclosed within ____.",
//       choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//       answer: "parentheses"
//     },
//     ///etc.
//   ];

//   startQuizBtnEl.addEventListener("click", function () {
//     event.preventDefault();
//     setTimeout(notifyTimeOut, 5000);
//     askQuestion();
//     console.log(questions);
// });

// function notifyTimeOut() {
//     alert("time is up ");
// };

// function askQuestion() {
//     alert("from array " + questions[1].title);
// }





// working example from previous project

// var getLength = 0;
// var isCharTypeNum = "false";
// var isCharTypeUpper = "false";
// var isCharTypeLower = "false";
// var isCharTypeSpecial = "false";
// var newPassword = [];
// var generatePasswordBtnEl = document.querySelector("#generatePassword");
// var copyPasswordToClipboardEl = document.querySelector("#copyPassword");
// var displayPasswordEl = document.querySelector("#displayPassword");

// const typeLowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const typeUpperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// const typeNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// const typeSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];

// generatePasswordBtnEl.addEventListener("click", function () {
//     event.preventDefault();
//     getUserInput();
//     generateChoicesArray();
//     generateNewPassword();
//     choicesArray = [];
// });

//get user input
// function getUserInput() {
//     getLength = prompt("Select Length of 8-128 characters: ");
//     isCharTypeNum = confirm("Include Numbers? ");
//     isCharTypeUpper = confirm("Include Upper Case? ");
//     isCharTypeLower = confirm("Include Lower Case? ");
//     isCharTypeSpecial = confirm("Include Special Characters? ");
// };

//dynamically set the choices array based on user input for different character types
//initialize choicesArray and then dynamically create the based on the user choices
// var choicesArray = [];

// function generateChoicesArray() {
//     if (isCharTypeUpper == true)
//         choicesArray = choicesArray.concat(typeUpperCaseLetters);
//     if (isCharTypeLower == true)
//         choicesArray = choicesArray.concat(typeUpperCaseLetters);
//     if (isCharTypeNum == true)
//         choicesArray = choicesArray.concat(typeNumbers);
//     if (isCharTypeSpecial == true)
//         choicesArray = choicesArray.concat(typeSpecialCharacters);
// };

//function to generate the new passowrd based on dynamically constructing an array
//need to add logic for better user experience on error for length or type choices
// function generateNewPassword() {
//     if (choicesArray.length < typeNumbers.length || getLength < 8) {
//         alert("You did not meet the minimum standard ")
//     } else {
//         for (i = 0; i < getLength; i++) {
//             newPassword += choicesArray[Math.floor(Math.random() * (choicesArray.length - 1))];
//         }
//         displayPasswordEl.textContent = newPassword;
//     };
// } 

// //copy to clipboard
// copyPasswordToClipboardEl.addEventListener("click", function() {
//     alert("copy and paste not working yet");
// });
