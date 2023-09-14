function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
          return 'Rock';
        case 1:
          return 'Paper';
        case 2:
          return 'Scissors';
      }
}

function playRound(playerSelection, computerSelection){
    const playerChoice = playerSelection.toLowerCase();
    const choices = ['rock', 'paper', 'scissors'];
    const outcomes = {
      rock: { beats: 'scissors', losesTo: 'paper' },
      paper: { beats: 'rock', losesTo: 'scissors' },
      scissors: { beats: 'paper', losesTo: 'rock' },
    };
    if (!choices.includes(playerChoice) || !choices.includes(computerSelection.toLowerCase())) {
        return "Invalid selection. Please choose Rock, Paper, or Scissors.";
    }
    if (playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie!";
      } else if (outcomes[playerChoice].beats === computerSelection.toLowerCase()) {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
      } else {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
        let playerSelection;
    
        // Prompt the user until they enter a valid choice
        while (true) {
          playerSelection = prompt(`Round ${round}: Enter Rock, Paper, or Scissors:`);
          const normalizedInput = playerSelection.toLowerCase();
    
          if (normalizedInput === 'rock' || normalizedInput === 'paper' || normalizedInput === 'scissors') {
            break; // Exit the loop if the input is valid
          } else {
            alert('Invalid choice. Please enter Rock, Paper, or Scissors.'); // Show an alert for invalid input
          }
        }
  
      // Get a random choice for the computer
      const computerSelection = getComputerChoice();
  
      // Play the round and display the result
      const result = playRound(playerSelection, computerSelection);
      console.log(`Round ${round}: ${result}`);
  
      // Update the scores
      if (result.includes('Win')) {
        playerScore++;
      } else if (result.includes('Lose')) {
        computerScore++;
      }
    }
  
    // Determine the overall winner
    let winner;
    if (playerScore > computerScore) {
      winner = "You Win!";
    } else if (computerScore > playerScore) {
      winner = "Computer Wins!";
    } else {
      winner = "It's a Tie!";
    }
  
    // Display the final scores and winner
    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
    console.log(winner);
}
  
  // Start the game
  game();
  