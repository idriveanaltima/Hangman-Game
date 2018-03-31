// Declaring variables for the game

var userGuess;
var lettersGuessed = [];
var lettersInWord = [];
var currentWord = newWord();
var guessesRemaining = currentWord.length;
var lettersMatched = 0;
var wins = 0;

// FUNCTIONS SECTION
// ______________________

// this function will take in a number to add the correct number of _'s for the hangman word and initalize values

function onPageLoad() {
  for (i = 0; i < currentWord.length; i++) {
    lettersInWord[i] = "_";
  }
  y = lettersInWord.join(" ")
  document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
  document.querySelector("#wins").innerHTML = wins;
  document.querySelector("#word").innerHTML = y;
  return y;
}


// function for determining the randomly selected word from the array

function newWord() {
  var words = ['acai', 'apples', 'apricots', 'avocado', 'ackee', 'bananas', 'blueberries', 'blackberries', 'cantaloupes', 'cherries', 'cranberries', 'currants', 'dates', 'elderberries', 'figs', 'gooseberries', 'grapefruit', 'kiwis', 'lemons', 'mangos', 'mulberries', 'grapes', 'grapefruits', 'oranges', 'papaya', 'pineapples', 'raspberries', 'peaches'];
  currentWord = words[Math.floor(Math.random() * words.length)];
  return currentWord;
}

// function for resetting the game when a player wins or is out of guesses

function reset() {
  newWord(currentWord);
  lettersMatched = 0;
  lettersGuessed = [];
  guessesRemaining = currentWord.length;
  lettersInWord = [];
  for (i = 0; i < currentWord.length; i++) {
    lettersInWord[i] = "_";
  }
  y = lettersInWord.join(" ")
  document.querySelector("#word").innerHTML = y;
  document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
  document.querySelector("#lettersUsed").innerHTML = lettersGuessed;
}

// function for determining the sequence of events when a user enters a letter


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
  };
  } else {
};

//matching the guessed letters to the word or reducing # ofguesses if incorrect
 

  //if the word is complete then add to wins and reset the game

  if (lettersMatched === currentWord.length) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  } else {

  };

  //if there are no more guesses then reset the game

  if (guessesRemaining === 0) {
    reset()
  } else {

  };

};




//will call this function to load the page.

document.querySelector("#word").innerHTML = onPageLoad();