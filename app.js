let choices = ['rock', 'paper', 'scissors'];

function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
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
        return 'player wins';
    } else {
        return 'computer wins';
    }
}


playRound();
