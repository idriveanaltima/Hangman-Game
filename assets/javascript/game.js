// Declaring variables for the game

let userGuess;
let lettersGuessed = [];
let lettersInWord = [];
var currentWord;
let guessesRemaining;
let lettersMatched = 0;
let wins = 0;
let losses = 0;
var words = ['acai', 'apples', 'apricots', 'avocado', 'ackee', 'bananas', 'blueberries', 'blackberries', 'cantaloupes', 'cherries', 'cranberries', 'currants', 'dates', 'elderberries', 'figs', 'gooseberries', 'grapefruit', 'kiwis', 'lemons', 'mangos', 'mulberries', 'grapes', 'grapefruits', 'oranges', 'papaya', 'pineapples', 'raspberries', 'peaches'];

// FUNCTIONS SECTION
// ______________________

// this function will take in a number to add the correct number of _'s for the hangman word and initalize values

function startGame() {
  
  newWord();
  guessesRemaining = currentWord.length;

    for (i = 0; i < currentWord.length; i++) {
      lettersInWord[i] = "_";
    }
      let completeWord = lettersInWord.join(" ")
      document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
      document.querySelector("#wins").innerHTML = wins;
      document.querySelector("#losses").innerHTML = losses;
      document.querySelector("#lettersUsed").innerHTML = lettersGuessed;
      document.querySelector("#word").innerHTML = completeWord;
  }

// function for determining the randomly selected word from the array

function newWord() {
  return currentWord = words[Math.floor(Math.random() * words.length)];
}

// function for resetting the game when a player wins or is out of guesses

function reset() {
  lettersInWord = [];
  lettersMatched = 0;
  lettersGuessed = [];
  startGame();
};


// captures the letters pressed

document.onkeyup = function (event) {
  userGuess = event.key;
  //will validate the letter to see if it was a valid entry before storing in the list

  if (lettersGuessed.indexOf(userGuess) === -1 && /^[a-z]/g.test(userGuess) === true ) {
    lettersGuessed.push(userGuess);
    document.querySelector("#lettersUsed").innerHTML = lettersGuessed;
     if (currentWord.indexOf(userGuess) > -1) {
    for (i = 0; i < currentWord.length; i++) {
      if (currentWord[i] == userGuess) {
        lettersMatched++;
        lettersInWord[i] = userGuess;
        document.querySelector("#word").innerHTML = lettersInWord.join(" ");
      }
    }
  } else {
    guessesRemaining--;
    document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
  }
  };
 

  //if the word is complete then add to wins and reset the game
  //if there are no more guesses then reset the game

  if (guessesRemaining === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset()
  } else if (lettersMatched === currentWord.length) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  };
};


//will call this function to start the game.

startGame();

