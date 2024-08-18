function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  const names = ['ROCK', 'PAPER', 'SCISSORS'];
  return names[index];
}

function playRound(playerSelection, computerSelection) {
  if (!playerSelection) return;
  const playerSelectionUpperCase = playerSelection.toUpperCase();

  if (
    (playerSelectionUpperCase === 'ROCK' && computerSelection === 'PAPER') ||
    (playerSelectionUpperCase === 'PAPER' &&
      computerSelection === 'SCISSORS') ||
    (playerSelectionUpperCase === 'SCISSORS' && computerSelection === 'ROCK')
  ) {
    return [
      `You lose! ${computerSelection} beats ${playerSelectionUpperCase}`,
      0,
      1,
    ];
  } else if (
    (playerSelectionUpperCase === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelectionUpperCase === 'SCISSORS' &&
      computerSelection === 'PAPER') ||
    (playerSelectionUpperCase === 'ROCK' && computerSelection === 'SCISSORS')
  ) {
    return [
      `You win! ${playerSelectionUpperCase} beats ${computerSelection}`,
      1,
      0,
    ];
  } else {
    return ["It's a draw!", 0, 0];
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll('button');
  const resultDiv = document.querySelector('.result');
  const scoreDiv = document.querySelector('.score');

  buttons.forEach((button) => {
    button.addEventListener('click', () => handleClick(button.textContent));
  });

  function handleClick(playerSelection) {
    let result = playRound(playerSelection, getComputerChoice());
    if (result.length === 3) {
      displayRoundResult(result[0]);
      playerScore += result[1];
      computerScore += result[2];
      displayScore();
      checkWinner();
    }
  }

  function displayRoundResult(result) {
    resultDiv.textContent = result;
  }

  function displayScore() {
    scoreDiv.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
  }

  function checkWinner() {
    if (playerScore === 5) {
      setTimeout(() => {
        alert('Player wins the game!');
        resetGame();
      }, 100); // Wait for 0.1 second before resetting
    } else if (computerScore === 5) {
      setTimeout(() => {
        alert('Computer wins the game!');
        resetGame();
      }, 100); // Wait for 0.1 second before resetting
    }
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultDiv.textContent = '';
    scoreDiv.textContent = '';
  }
}

game();
