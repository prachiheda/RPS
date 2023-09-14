
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

document.getElementById('water').addEventListener('click', () => playRound('water', getComputerChoice()));
document.getElementById('earth').addEventListener('click', () => playRound('earth', getComputerChoice()));
document.getElementById('fire').addEventListener('click', () => playRound('fire', getComputerChoice()));
document.getElementById('air').addEventListener('click', () => playRound('air', getComputerChoice()));

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
        case 0:
          return 'water';
        case 1:
          return 'earth';
        case 2:
          return 'fire';
        case 3:
            return 'air';
      }
}

function playRound(playerChoice, computerSelection){
    const outcomes = {
        water: { beats: 'earth', losesTo: 'fire' },
        earth: { beats: 'fire', losesTo: 'air' },
        fire: { beats: 'air', losesTo: 'water' },
        air: { beats: 'water', losesTo: 'earth' }
    };

    const resultsDiv = document.getElementById('results');
    const scoreDiv = document.getElementById('score');

    if (playerChoice === computerSelection.toLowerCase()) {
        resultsDiv.textContent = "It's a tie!";
    } else if (outcomes[playerChoice].beats === computerSelection.toLowerCase()) {
        resultsDiv.textContent = `You Win! ${playerChoice} beats ${computerSelection}`;
        playerScore++;
    } else if (outcomes[computerSelection.toLowerCase()].beats === playerChoice) {
        resultsDiv.textContent = `You Lose! ${computerSelection} beats ${playerChoice}`;
        computerScore++;
    } else {
        resultsDiv.textContent = "No one wins, they are opposite elements.";
    }

    scoreDiv.textContent = `Score: Player ${playerScore} - Computer ${computerScore}`;

    if (playerScore >= winningScore || computerScore >= winningScore) {
        announceWinner();
    }
}

function announceWinner() {
    const resultsDiv = document.getElementById('results');

    if (playerScore > computerScore) {
        resultsDiv.textContent = "You Win the Game!";
    } else if (computerScore > playerScore) {
        resultsDiv.textContent = "Computer Wins the Game!";
    } else {
        resultsDiv.textContent = "It's a Tie!";
    }

    // Disable the buttons to prevent further play
    document.getElementById('water').disabled = true;
    document.getElementById('earth').disabled = true;
    document.getElementById('fire').disabled = true;
    document.getElementById('air').disabled = true;
}


  