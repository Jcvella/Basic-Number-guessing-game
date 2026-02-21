
//max number 10
const MAX_NUMBER = 10;
//min number 1
const MIN_NUMBER = 1;
//function for the game
function numberGuessingGame() {
  //computer numbers
  const SECRETNUMBER = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  //user guess
  let guess = null;
  //the amount of attempts the user made
  let attempts = 0;
  //welcome
  console.log("Welcome to the Nuumber Guessing Game!");
  //while loop for user guess
  while (guess !== SECRETNUMBER) {
    //prompt for user to take guess
    guess = parseInt(prompt("Guess a number between 1-10"));
    //checking if userguess is above max, below min, or not a number
    if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
      console.log(
        "Invalid choice please choose a number betwee  $(MIN_NUMBER) and  $(MAX_NUMBER)",
      );
      continue;
    }
    //increase attempts by 1
    attempts++;
    //switch case to see if user is number <, >, === computer number
    switch (guess === guess) {
      case guess > SECRETNUMBER:
        console.log("too high guess again");
        break;
      case guess < SECRETNUMBER:
        console.log("too low guess again");
        break;
      default:
        console.log("congrats you guessed the right number ");
        break;
    }
  }
  //asking user if want to play again
  const playAgainPrompt = prompt("do you wanna play again? yes or no");
  console.log(playAgainPrompt);
  const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";
  if (playAgain === "yes") {
    numberGuessingGame();
  } else {
    console.log("Good bye");
  }
}
numberGuessingGame();