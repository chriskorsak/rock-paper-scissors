// function that randomly returns either 'rock', 'paper', or 'scissors'
function computerPlay() {
  // create array of string answers
  let answers = ['Rock', 'Paper', 'Scissors'];
  // generate an integer between 0-2
  let randomNumber = Math.floor(Math.random() * (2 + 1));
  // return array element based on that random number
  return answers[randomNumber];
}

// function that compares computer selection with player selection
function playRound(playerSelection, computerSelection) {
  const computerWins = `You lose! ${computerSelection} beats ${playerSelection}`;
  const playerWins = `You win! ${playerSelection} beats ${computerSelection}`;

  if (playerSelection === computerSelection) {
    return `Tie! ${playerSelection} equals ${computerSelection}`
  }
  // player chose rock
  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      return computerWins;
    } else {
      return playerWins;
    }
  }
  // player chose paper
  if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      return computerWins;
    } else {
      return playerWins;
    }
  }
  // player chose scissors
  if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      return computerWins;
    } else {
      return playerWins;
    }
  }
  return "You didn't input a correct answer. Try again."
}

// get player selection from prompt. reprompt if no input
let playerSelection;
while (!playerSelection) {
  let input = prompt("Type your selection");
  //change to lower case
  input = input.toLowerCase();
  //capitalize first letter and concatenate with lower case
  playerSelection = input[0].toUpperCase() + input.slice(1);
}

// run computer play function and store in variable
const computerSelection = computerPlay();

let outcome = playRound(playerSelection, computerSelection);
console.log(outcome);
