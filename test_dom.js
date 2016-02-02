function userName(){
userName = document.getElementById("name").value;
 gamerName.innerHTML = "Hello " + userName;
}



//we create a function called gameStarter that creates random number to start the game
function gameStarter(){
//random number generator
randomNumber = (Math.floor(Math.random()*100)+1);

// alert(randomNumber)
alert(randomNumber)
};


var triesCounter = 0;


//we create a function called proccessGuess that compares the users guess to the random number
function processGuess(){



//taking the value of the user guess (text box) and converting the value into a integer
  var guessString = parseInt(document.getElementById("guess").value);

//link this variable (lastGuessString) that we created in the js file with the h1 id tag (lastGuess) in the html file
  var lastGuessString = document.getElementById("lastGuess");

//link this variable (hintString) that we created in the js file with the h2 tag (hint) in the html file
  var hintString = document.getElementById("hint");

//when the user enters a integer into text box, the users guess will appear as the text of H1 tag
  lastGuessString.innerHTML = guessString;

//clears the textbox every time the user clicks the 'your guess' button
  document.getElementById("guess").value = "";



//if random number is greater than the user guess, the H2 tag will display "too low" as a hint - adds one to the counter
if ( randomNumber > guessString)
  {
  hintString.innerHTML = "Too Low";
  triesCounter++;
  }

//if random number is less than the user guess, then the H2 tag will display "Too High" as a hint - adds one to the counter
else if (randomNumber < guessString)
  {
    hintString.innerHTML = "Too High";
      triesCounter++;
  }
//If the user guess the right number, the H2 tag displays "You win!"
else {
    hintString.innerHTML = "You win " + userName + "!";
  }
//If the user guesses more than 7 times they lose and will be told 'No More Tries'
if (triesCounter>7){
  hintString.innerHTML = "No more tries, " + userName;
}

};
