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
  if (playerSelection === computerSelection) {
    return `Tie! ${playerSelection} equals ${computerSelection}`
  }
  // player chose rock
  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  }
  // player chose paper
  if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  }
  // play chose scissors
  if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  }
}

// get player selection from prompt. reprompt if no input
let playerSelection;
while (!playerSelection) {
  playerSelection = prompt("Type your selection");
}

// run computer play function and store in variable
const computerSelection = computerPlay();

let output = playRound(playerSelection, computerSelection);
console.log(output);
