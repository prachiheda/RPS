
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';
      }
}

function playRound(playerChoice, computerSelection){
    const outcomes = {
      rock: { beats: 'scissors', losesTo: 'paper' },
      paper: { beats: 'rock', losesTo: 'scissors' },
      scissors: { beats: 'paper', losesTo: 'rock' },
    };

    const resultsDiv = document.getElementById('results');
    const scoreDiv = document.getElementById('score');

    if (playerChoice === computerSelection) {
        resultsDiv.textContent = "It's a tie!";
      } else if (outcomes[playerChoice].beats === computerSelection) {
        resultsDiv.textContent = `You Win! ${playerChoice} beats ${computerSelection}`;
        playerScore++;
      } else {
        resultsDiv.textContent = `You Lose! ${computerSelection} beats ${playerChoice}`;
        computerScore++;
    }

    scoreDiv.textContent = `Score: Player ${playerScore} - Computer ${computerScore}`;

    if (playerScore >= winningScore || computerScore >= winningScore) {
        announceWinner();
    }
}

function announceWinner() {
    const resultsDiv = document.getElementById('results');
    const scoreDiv = document.getElementById('score');

    if (playerScore > computerScore) {
        resultsDiv.textContent = "You Win the Game!";
    } else if (computerScore > playerScore) {
        resultsDiv.textContent = "Computer Wins the Game!";
    } else {
        resultsDiv.textContent = "It's a Tie!";
    }

    // Disable the buttons to prevent further play
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}


  