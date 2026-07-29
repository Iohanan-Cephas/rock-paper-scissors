console.log("hello world!");

function cantBeZero() {
    let x;
    do {
        x = Math.random();
    } while(x === 0);

    return x;
}

function getChoiceNumber(max) {
    let x = cantBeZero();
    return Math.floor(x * max);
}

function getComputerChoice() {
    let x = getChoiceNumber(3);
    let choice;

    switch(x) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "papel";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}