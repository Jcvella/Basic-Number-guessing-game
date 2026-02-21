// random number guessing game
// assigning base value to guess and attempts
const MIN_NUMBER = 1
const MAX_NUMBER= 10
//function for the guessing game
function randomNumberGuess(){
    const secretNumber = Math.floor(Math.random()*MAX_NUMBER)+1;
    let guess = null
    let attempts = 0
    //introduction
    console.log ('welcome to the number guessing game');
    //prompting user guess
    while (guess !== secretNumber){
        let userGuess = prompt('guess the number');
     guess = parseInt(userGuess);
     if (isNaN(guess)|| guess < MIN_NUMBER|| guess > MAX_NUMBER){
        console.log (`invalid choice please choose a number between ${MIN_NUMBER} and ${MAX_NUMBER}`);
        continue;
    }
    attempts++;
    if (guess < secretNumber){
        console.log('too low guess again')
    } else if (guess > secretNumber) {
        console.log('too high guess again')
    } else {
        console.log(`congrats you guessed right your attempts are ${attempts}`);
        break;
    }
}

const playAgainPrompt = prompt('do you want play again? yes/no');
    console.log(playAgainPrompt);
const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase(): 'no'
    if (playAgain==='yes'){
        randomNumberGuess()
    }else{
        console.log('goodbye');
    }
}

randomNumberGuess()