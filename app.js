const choices = ['rock', 'paper', 'scissors'];
const winners = [];
const startGame = document.getElementById('startBtn');

startGame.addEventListener('click', function() {
    game();
});

function game() {
    for(let i = 0; i < 5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

function validateInput(choice) {
    return choices.includes(choice);
}

function getPlayerChoice() {
    let input = prompt('select rock paper or scissors');
    while(input == null) {
        input = prompt('you have to select rock paper or scissors')
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while(check == false) {
        input = prompt('type ONLY rock paper or scissors');
        while(input == null) {
            input = prompt('you have to select rock paper or scissors')
        }
        input = input.toLowerCase();
        check = validateInput(input);    
    }
 return input;
}


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(playerChoice, computerChoice) {
    if(playerChoice == computerChoice) {
        return 'tie';
    } else if (
        (playerChoice == 'rock' && computerChoice == 'scissors') || 
        (playerChoice == 'paper' && computerChoice == 'rock') || 
        (playerChoice == 'scissors' && computerChoice == 'paper')) {
        return 'player';
    } else {
        return 'computer';
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == 'player').length;
    let computerWins = winners.filter((item) => item == 'computer').length;
    let ties = winners.filter((item) => item == 'tie').length;
    console.log('Results:');
    console.log('Player wins:', playerWins);
    console.log('Computer wins:', computerWins);
    console.log('Ties:', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round)
    console.log('Player Chose:', playerChoice)
    console.log('Computer Chose:', computerChoice)
    console.log(winner, 'won the round!')
    console.log('---------------------------')
}


