//GLOBAL INTERFACE VARIABLES

//Start Game Button
const startGame = document.getElementById('startGame');
//Message
let message = document.getElementById('message');
//Score Section
const scoreSection = document.getElementById('scoreSection');
//Player Score
let playerScore = document.getElementById('playerScore');
//Computer Score
let computerScore = document.getElementById('computerScore');
//Player Selection Section
let playerSelectionSection = document.getElementById('playerSelection');

//GLOBAL EVENT HANDLERS
//start game
startGame.addEventListener('click', game);

//FUNCTIONS
function game() {
  //initialize score at start of game
  pScore = 0;
  cScore = 0;

  //hide start game button and display scoreboard
  startGame.style.visibility = 'hidden';
  scoreSection.style.visibility = 'visible';

  //add click event to images
  playerSelectionSection.addEventListener('click', playRound);

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
    //player selection generated from click event
    playerSelection = playerSelection.target.id;
    const computerSelection = computerPlay();
    console.log(playerSelection, computerSelection)

    const computerWins = `You lose! ${computerSelection} beats ${playerSelection}`;
    const playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
    const tie = `Tie! ${playerSelection} equals ${computerSelection}`

    if (playerSelection === computerSelection) {
      message.textContent = tie;
      return tie;
    }
    // player chose rock
    if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        message.textContent = computerWins;
        cScore++;
      } else {
        message.textContent = playerWins;
        pScore++;
      }
    }
    // player chose paper
    if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        message.textContent = computerWins;
        cScore++;
      } else {
        message.textContent = playerWins;
        pScore++;
      }
    }
    // player chose scissors
    if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        message.textContent = computerWins;
        cScore++;
      } else {
        message.textContent = playerWins;
        pScore++;
      }
    }

    //update scoreboard after playing a round
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }



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
    // let computerSelection = computerPlay();
    // let roundOutcome = playRound(playerSelection, computerSelection);
    // // winner of a round gets 1 point
    // if (roundOutcome[0] === 'computer') {
    //   computerScore++;
    // } else if (roundOutcome[0] === 'player') {
    //   playerScore++;
    // }
    // // print out the winner of each round
    // console.log(`${roundOutcome[1]}\nComputer:${computerScore} Player:${playerScore}`);
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
