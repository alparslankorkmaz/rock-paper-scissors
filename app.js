const choices = ["Rock", "Paper", "Scissors"];
const winners = [];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const pInfo = document.querySelector("#pInfo");
const cInfo = document.querySelector("#cInfo");
const wInfo = document.querySelector("#wInfo");
const container = document.querySelector("#container");

// function playRound(round) {
//   const playerSelection = getPlayerChoice();
//   const computerSelection = getComputerChoice();
//   const winner = checkWinner(playerSelection, computerSelection);
//   winners.push(winner);
//   logRound(playerSelection, computerSelection, winner, round);
// }

// function playRound() {
//   pInfo.textContent = `Player chose: ${}`;
//   cInfo.textContent = `Computer chose: ${getComputerChoice()}`;
// }

rock.addEventListener("click", () => {
  playerSelection = choices[0];
  computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  pInfo.textContent = `Player chose: ${playerSelection}`;
  cInfo.textContent = `Computer chose: ${computerSelection}`;
  wInfo.textContent = `Winner: ${winner}`;
});
paper.addEventListener("click", () => {
  playerSelection = choices[1];
  computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  pInfo.textContent = `Player chose: ${playerSelection}`;
  cInfo.textContent = `Computer chose: ${computerSelection}`;
  wInfo.textContent = `Winner: ${winner}`;
});
scissors.addEventListener("click", () => {
  playerSelection = choices[2];
  computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  pInfo.textContent = `Player chose: ${playerSelection}`;
  cInfo.textContent = `Computer chose: ${computerSelection}`;
  wInfo.textContent = `Winner: ${winner}`;
});

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return "Tie";
  } else if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

// function logWins() {
//   let playerWins = winners.filter((item) => item == "player").length;
//   let computerWins = winners.filter((item) => item == "computer").length;
//   let ties = winners.filter((item) => item == "tie").length;
//   console.log("Results:");
//   console.log("Player wins:", playerWins);
//   console.log("Computer wins:", computerWins);
//   console.log("Ties:", ties);
// }

// function logRound(playerChoice, computerChoice, winner, round) {
//   console.log("Round:", round);
//   console.log("Player Chose:", playerChoice);
//   console.log("Computer Chose:", computerChoice);
//   console.log(winner, "won the round!");
//   console.log("---------------------------");
// }
