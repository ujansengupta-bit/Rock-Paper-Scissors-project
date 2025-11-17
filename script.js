let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const r = Math.random();
    if (r <= 1/3) return "rock";
    if (r <= 2/3) return "paper";
    return "scissors";
}
function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors:");
    if (!choice) return null;

    choice = choice.toLowerCase();
    const valid = ["rock", "paper", "scissors"];

    if (!valid.includes(choice)) {
        console.log("Invalid input. Type only Rock, Paper, or Scissors.");
        return null;
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
        console.log("Invalid input.");
        return;
    }

    console.log("You chose:", humanChoice);
    console.log("Computer chose:", computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Draw!");
        return;
    }

    const youLose =
        (humanChoice === "rock"     && computerChoice === "paper") ||
        (humanChoice === "paper"    && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock");

    if (youLose) {
        console.log(`You lose!`);
        computerScore++;
    } else {
        console.log(`You win!`);
        humanScore++;
    }
    console.log("Your Score:", humanScore, "Computer Score:", computerScore);
}

while (true) {
    const human = getHumanChoice();
    if (human === null) {
        console.log("Game ended.");
        break;
    }

    const computer = getComputerChoice();
    playRound(human, computer);
}