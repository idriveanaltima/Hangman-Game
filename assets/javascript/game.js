
// Declaring variables for the hangman game


var words = ["Apple", "Orange", "Banana", "Cherry"];
var userGuess;
var lettersGuessed = [];
var lettersInWord = [];
var currentWord = newWord();
var guessesRemaining = currentWord.length * 2;
var letterValidation = /a-z/;

// FUNCTIONS SECTION
// ______________________

// function for determining the randomly selected word from the array and pulling out the letters

function newWord() {
currentWord = words[Math.floor(Math.random() * words.length)];
return currentWord;
}

// The number or characters in the word will tell me how many elements to create

var characters = function (word) {
  return word.length;
}

// this function will take in a number to add the correct number of _'s for the hangman word


function underscore (num) {
  return x = "_ ".repeat(num);
}

console.log(underscore(characters(currentWord)));

// Validate letters are 

// function letterVal (letter) {
//   if  (letter === userGuess) {
//      return
//   } else {
//     alert("Please enter a letter!")
//   }
// }

// For loop that identifies each letter of the randomly generated word from the words array.  REMOVE

      for (i=0; i < currentWord.length; i++) {
      lettersInWord.push(currentWord[i]);
  }

 console.log(currentWord);


// Is this a way to dynamically created elements

// function dynamicLetters (){
// let p = document.createElement('p');
// p.className = "gameLetter";
// p.innerHTML = userGuess;
// document.body.appendChild(p);
//  }

//  console.log(dynamicLetters(characters(selectedWord)));


document.onkeyup = function(event) {
  userGuess = event.key;
  letterVal(userGuess);
  lettersGuessed.push(userGuess);
  
  
   // for loop that compares letters in word to the users guess
  

  for (i=0; i < currentWord.length; i++) {
    if (currentWord[i] == userGuess) {
    console.log("It's a match");
  } else { 
    guessesRemaining--;
    document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
    return;
    console.log("not a match");
  }

}

// if user guess is already made then do nothing 
// else if userguess is the same as a letter in the word then print the letter
// else if userguess doesn't match any letter in the word then print the letter and reduced guesses remaining by 1

console.log(lettersGuessed);
console.log(guessesRemaining);
document.querySelector("#lettersUsed").innerHTML = lettersGuessed;

}

document.querySelector("#word").innerHTML = underscore(characters(currentWord));
document.querySelector("#guessesLeft").innerHTML = guessesRemaining;

// REMOVE

// var html =
//           "<p>You chose: " + userGuess + "</p>" +
//           "<p>The computer chose: " + computerGuess + "</p>" +
//           "<p>wins: " + wins + "</p>" +
//           "<p>losses: " + losses + "</p>" +
//           "<p>ties: " + ties + "</p>";

//         // Set the inner HTML contents of the #game div to our html string
//         document.querySelector("#game").innerHTML = html;