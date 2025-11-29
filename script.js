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

    results.innerHTML = "<p>Choose: Rock, Paper, or Scissors to start a new game!</p>";
    score.innerHTML = "<p>YOU: 0</p> <p>Computer: 0</p>";

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
        results.innerHTML = "<p>" + roundResult + "</p>";
        return;
    }

    const youLose =
        (humanChoice === "rock"     && computerChoice === "paper") ||
        (humanChoice === "paper"    && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock");

    if (youLose) {
        roundResult = "<p>You LOSE!!!</p>"  + "<p> Computer choose: " + computerChoice + "</p>"
        computerScore++;
    } else {
        roundResult = "<p>You WIN!!!</p>"   + "<p> Computer choose: " + computerChoice + "</p>"
        humanScore++;
    }
    results.innerHTML = "<p>" + roundResult + "</p>";
    score.innerHTML   = "<p>YOU:" + humanScore + "</p><p>Computer: " + computerScore + "</p>"

    if(humanScore === 5) {
        results.innerHTML += "<p>GAME OVER: YOU WON!!!!</p>"
        pause();
    }
    if(computerScore === 5) {
        results.innerHTML += "<p>GAME OVER COMPUTER WON!!!!</p>"
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
