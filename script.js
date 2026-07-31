let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);

    switch(x) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock Paper Scissors: ");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    String(humanChoice);
    let humanChoiceStr = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    

    if(humanChoiceStr === computerChoice) {
        return console.log("That's a draw!");
    }

    if(humanChoiceStr === 'Rock') {
        if(computerChoice === 'Scissor') {
            humanScore++;
            return console.log(`You win! ${humanChoiceStr} beats ${computerChoice}`);
        } else {
            computerScore++;
            return console.log(`You lose! ${computerChoice} beats ${humanChoiceStr}`);
        }
    } else if(humanChoiceStr === 'Paper') {
        if(computerChoice === 'Rock') {
            humanScore++;
            return console.log(`You win! ${humanChoiceStr} beats ${computerChoice}`);
        } else {
            computerScore++;
            return console.log(`You lose! ${computerChoice} beats ${humanChoiceStr}`);
        }
    } else {
        if(computerChoice === 'Paper') {
            humanScore++;
            return console.log(`You win! ${humanChoiceStr} beats ${computerChoice}`);
        } else {
            computerScore++;
            return console.log(`You lose! ${computerChoice} beats ${humanChoiceStr}`);
        }
    }
}
