
function getChoiceNumber(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let x = getChoiceNumber(3);

    switch(x) {
        case 0:
            return "rock";
        case 1:
            return "papel";
        case 2:
            return "scissors";
    }
}