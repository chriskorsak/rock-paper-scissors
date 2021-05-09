//GLOBAL INTERFACE VARIABLES

//Start Game Button
const startGame_button = document.getElementById('startGame');
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
  
//initialize score at start of game
let pScore = 0;
let cScore = 0;

//GLOBAL EVENT HANDLERS
//start game
startGame_button.addEventListener('click', startGame);

//FUNCTIONS
function startGame() {
  //wipe out scores for new game
  pScore = 0;
  cScore = 0;
  // update scoreboard
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;

  // clear out message
  message.textContent = 'First to 5 wins. Go!';

  //hide start game button and display scoreboard
  startGame_button.style.visibility = 'hidden';
  scoreSection.style.visibility = 'visible';

  //add click event to images
  playerSelectionSection.addEventListener('click', playRound);
}

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

  // update scoreboard
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;

  //check for winner and run endgame() if so
  if (pScore > 4 || cScore > 4) {
    endGame();
  }
}

function endGame() {
  // output message based on who won
  if (pScore > cScore) {
    message.textContent = 'You win the game!';
  } else if (pScore < cScore) {
    message.textContent = 'Computer Wins the game. Try again.';
  } else {
    message.textContent = 'Tie game. Peace on earth. Everyone is a winner!';
  }

  //hide start game button and display scoreboard
  startGame_button.style.visibility = 'visible';
  // scoreSection.style.visibility = 'hidden';
  
  //remove click event to images
  playerSelectionSection.removeEventListener('click', playRound);
}
    
