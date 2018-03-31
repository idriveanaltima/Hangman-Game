// Declaring variables for the game

var userGuess;
var lettersGuessed = [];
var lettersInWord = [];
var currentWord = newWord();
var guessesRemaining = currentWord.length * 2;
var lettersMatched = 0;
var wins = 0;
var losses = 0;

// FUNCTIONS SECTION
// ______________________

// this function will take in a number to add the correct number of _'s for the hangman word

function onPageLoad() {
  for (i = 0; i < currentWord.length; i++) {
    lettersInWord[i] = "_";
  }
  y = lettersInWord.join(" ")
  document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
  document.querySelector("#wins").innerHTML = wins;
  document.querySelector("#losses").innerHTML = losses;
  document.querySelector("#word").innerHTML = y;
  return y;
}


// function for determining the randomly selected word from the array and pulling out the letters

function newWord() {
  var words = ['acai', 'apples', 'apricots', 'avocado', 'ackee', 'bananas', 'blueberries', 'blackberries', 'cantaloupes', 'cherries', 'cranberries', 'currants', 'dates', 'elderberries', 'figs', 'gooseberries', 'grapefruit', 'kiwis', 'lemons', 'mangos', 'mulberries', 'grapes', 'grapefruits', 'honeydew melons', 'oranges', 'papaya', 'pineapples', 'raspberries', 'peaches'acai'acai', 'apples', 'apricots', 'avocado', 'ackee', 'bananas', 'blueberries', 'blackberries', 'cantaloupes', 'cherries', 'cranberries', 'currants', 'dates', 'elderberries', 'figs', 'gooseberries', 'grapefruit', 'kiwis', 'lemons', 'mangos', 'mulberries', 'grapes', 'grapefruits', 'honeydew melons', 'oranges', 'papaya', 'pineapples', 'raspberries', 'peaches'];
  currentWord = words[Math.floor(Math.random() * words.length)];
  return currentWord;
}
console.log(currentWord);

function reset() {
  newWord(currentWord);
  lettersMatched = 0;
  lettersGuessed = [];
  guessesRemaining = currentWord.length * 2;
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

  //will validate the letter to see if it was a valid letter and validate whether a letter has already been pressed.



  if (/^[a-z]/.test(userGuess) === true) {
    lettersGuessed.push(userGuess);
    document.querySelector("#lettersUsed").innerHTML = lettersGuessed;
  } else {}

  if (currentWord.indexOf(userGuess) > -1) {
    for (i = 0; i < currentWord.length; i++) {
      if (currentWord[i] == userGuess) {
        lettersMatched++;
        console.log(lettersMatched);
        lettersInWord[i] = userGuess;
        document.querySelector("#word").innerHTML = lettersInWord.join(" ");
      }
    }
  } else {
    console.log(currentWord.indexOf(userGuess))
    guessesRemaining--;
    document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
  }

  if (lettersMatched === currentWord.length) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    console.log("game over");
    reset();
  } else {}

}



document.querySelector("#word").innerHTML = onPageLoad();