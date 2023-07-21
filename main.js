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
    return `You lose! ${computerSelection} beats ${playerSelectionUpperCase}`;
  } else if (
    (playerSelectionUpperCase === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelectionUpperCase === 'SCISSORS' &&
      computerSelection === 'PAPER') ||
    (playerSelectionUpperCase === 'ROCK' && computerSelection === 'SCISSORS')
  ) {
    return `You win! ${playerSelectionUpperCase} beats ${computerSelection}`;
  } else {
    return "It's a draw!";
  }
}

function game() {
  for (let round = 0; round < 5; round++) {
    const playerSelection = prompt('Rock, paper or scissors?');
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
