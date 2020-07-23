let prompt = require("prompt-sync")({
  sigint: true,
});

/*============================================*/

//global variables
let secretNumber = Math.floor(Math.random() * 10 + 1);
console.log(secretNumber);
let guesses = [];
let count = 1;
let quit = false;

//checking to see if number has already been guessed
const guessedNumber = (num, guesses) => {
  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i] === num) {
      console.log("Number already guessed! Try again!");
      guesses.pop();
      count--;
    }
  }
  count++;
};

//number guesser game
const numberGuesser = () => {
  while (!quit) {
    console.log("Guess a number: ");
    let answer = Number(prompt("> ", "undefined"));

    if (answer < secretNumber && !guessedNumber(answer, guesses)) {
      console.log("Too Low!");
      guesses.push(answer);
    } else if (answer > secretNumber && !guessedNumber(answer, guesses)) {
      console.log("Too High!");
      guesses.push(answer);
    } else if (answer === secretNumber) {
      console.log("You got it! You took " + count + " attempts!");
      quit = true;
    } else {
      console.log("Not a number! please try Again!");
    }
    console.log(guesses);
  }
};

numberGuesser();
