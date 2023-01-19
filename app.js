const choices = ["Rock", "Paper", "Scissors"];
const winners = [];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const pInfo = document.querySelector("#pInfo");
const cInfo = document.querySelector("#cInfo");
const wInfo = document.querySelector("#wInfo");

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
