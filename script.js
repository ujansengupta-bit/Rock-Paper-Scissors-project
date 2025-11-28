let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");
const score   = document.querySelector("#score");

const button  = document.querySelectorAll(".playButton");

const reset   = document.querySelector("#reset");

for(let i =0; i<button.length; i++){
        button[i].addEventListener("click", event =>{
            playRound(button[i].id, getComputerChoice());
        });
}

reset.addEventListener("click", resetgame);

function resetgame(){
    humanScore = 0;
    computerScore = 0;

    results.textContent = "Choose Rock, Paper, or Scissors to start a new game!";
    score.textContent = "YOU: 0  Computer: 0";

    unpause();
}


function getComputerChoice() {
    const r = Math.random();
    if (r <= 1/3) return "rock";
    if (r <= 2/3) return "paper";
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if(humanScore >= 5 || computerScore >= 5){
        return;
    }

    let roundResult = "";

    if (humanChoice === computerChoice) {
        roundResult = 'DRAW!!! Both choose: '  + humanChoice;
        return;
    }

    const youLose =
        (humanChoice === "rock"     && computerChoice === "paper") ||
        (humanChoice === "paper"    && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock");

    if (youLose) {
        roundResult = 'You LOSE!!! Computer choose: ' + computerChoice
        computerScore++;
    } else {
        roundResult = 'You WIN!!! Computer choose: ' + computerChoice
        humanScore++;
    }
    results.textContent = roundResult;
    score.textContent   = 'YOU: ' + humanScore + '  Computer: ' + computerScore

    if(humanScore === 5) {
        results.textContent += "   GAME OVER: YOU WON!!!!"
        pause();
    }
    if(computerScore === 5) {
        results.textContent += "   GAME OVER COMPUTER WON!!!!"
        pause();
    }
}

function pause(){
    for(let i=0; i<button.length; i++){
        button[i].disabled = true;
    }
}

function unpause(){
    for(let i=0; i<button.length; i++){
        button[i].disabled = false;
    }
}
