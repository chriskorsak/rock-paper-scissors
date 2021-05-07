//GLOBAL INTERFACE VARIABLES

//Start Game Button
const startGame = document.getElementById('startGame');
//Message
let message = document.getElementById('message');
//Player Score
let playerScore = document.getElementById('playerScore');
//Computer Score
let computerScore = document.getElementById('computerScore');
//Player Selection Section
let playerSelectionSection = document.getElementById('playerSelection');

//EVENT HANDLERS
//start game
startGame.addEventListener('click', game);
//player selection
playerSelectionSection.addEventListener('click', playRound);

//FUNCTIONS

// function that randomly returns either 'rock', 'paper', or 'scissors'
function computerPlay() {
  // create array of string answers
  let answers = ['rock', 'paper', 'scissors'];
  // generate an integer between 0-2
  let randomNumber = Math.floor(Math.random() * (2 + 1));
  // return array element based on that random number
  return answers[randomNumber];
}

// function that compares computer selection with player selection
function playRound(playerSelection) {
  playerSelection = playerSelection.target.id;
  let computerSelection = computerPlay();
  const computerWins = ['computer', `You lose! ${computerSelection} beats ${playerSelection}`];
  const playerWins = ['player', `You win! ${playerSelection} beats ${computerSelection}`];

  if (playerSelection === computerSelection) {
    console.log(['tie', `Tie! ${playerSelection} equals ${computerSelection}`]);
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
    return ['invalid', "You didn't input a correct answer. Try again."];
}

function game() {
  // create score variables for player and computer
  // let playerScore = 0;
  // let computerScore = 0;

  // // iterate through rounds of game. first to 5 ends the game.
  // while (playerScore < 5 && computerScore < 5) {
  //   // get player selection from prompt. reprompt if no input
  //   let playerSelection;
  //   while (!playerSelection) {
  //     let input = prompt("Type your selection (Rock, Paper, or Scissors)");
  //     //change to lower case
  //     input = input.toLowerCase();
  //     //capitalize first letter and concatenate with lower case
  //     playerSelection = input[0].toUpperCase() + input.slice(1);
  //   }


  // run computer play function and store in variable
  let computerSelection = computerPlay();
  let roundOutcome = playRound(playerSelection, computerSelection);
  // winner of a round gets 1 point
  if (roundOutcome[0] === 'computer') {
    computerScore++;
  } else if (roundOutcome[0] === 'player') {
    playerScore++;
  }
  // print out the winner of each round
  console.log(`${roundOutcome[1]}\nComputer:${computerScore} Player:${playerScore}`);
  // }

  // // // return the winner of the game
  // if (playerScore > computerScore) {
  //   return 'You win the game!'
  // } else if (playerScore < computerScore) {
  //   return 'Computer Wins the game :('
  // } else {
  //   return 'Tie game. Peace on earth. Everyone is a winner!'
  // }
}
