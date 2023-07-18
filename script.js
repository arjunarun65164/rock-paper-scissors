function getComputerChoice() {
    let num = Math.random();
    if (num < .33) {
        return "rock";
    }
    else if (num < .66) {
        return "paper";
    }
    return "scissors";
    //returns Rock, Paper or scissors randomly
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection == "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return true;
    }
    else if (playerSelection === computerSelection) {
        return;
    }
    else {
        return false;
    }

}

// function game(playerSelection) {
//     let scorePlayer, scoreComputer = 0;
//     let playerSelection;

//     let computerSelection = getComputerChoice();
//     let round = playRound(playerSelection, computerSelection);

//     if (round) {
//         scorePlayer++;
//     }
//     else if (round === false) {
//         scoreComputer++;
//     }


//     if (scorePlayer > scoreComputer) {
//         alert("You won!");
//     }
//     else if (scoreComputer > scorePlayer) {
//         alert("You lost!");
//     }
//     else {
//         alert("Draw");
//     }
// }


function changeImageBorder(playerSelection, computerSelection, decision){
    let buttonPlayer = document.querySelector(`#${playerSelection}`);
    let buttonComputer = document.querySelector(`#${computerSelection}`);

    if (decision === undefined){
        buttonPlayer.classList.toggle("draw");
        setTimeout(() => {buttonPlayer.classList.toggle("draw")},1000)
        return;
    } //if its a draw toggle the draw thing for 500 ms

    buttonPlayer.classList.toggle("playerSelect");
    buttonComputer.classList.toggle("computerSelect");

    setTimeout(() => {buttonPlayer.classList.toggle("playerSelect")}, 1000);
    setTimeout(() => {buttonComputer.classList.toggle("computerSelect")}, 1000);
    //toggle the buttons for 500ms so that the border shows
    // the bordered for player and computer select buttons are toggled
}

function buttonClick(e) {

    let playerSelection = this.id;
    let computerSelection = getComputerChoice();

    let decision = playRound(playerSelection, computerSelection);
    let playerScore = document.querySelector(".player-score");
    let computerScore = document.querySelector(".computer-score");
    let title = document.querySelector("h1");

    if (playerScore.innerText === "5" || computerScore.innerText === "5"){
        return;
    }

    else if (decision){
        playerScore.innerText = Number(playerScore.innerText) + 1;
        title.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (decision === false){
        computerScore.innerText = Number(computerScore.innerText) + 1;
        title.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else{
        title.innerText = "It's a Draw!";
    }
    //changes the score and display heading depending on who won

    changeImageBorder(playerSelection, computerSelection, decision);

    if (playerScore.innerText === "5"){
        title.innerText = `Game End: You Won 5 - ${computerScore.innerText}`;
        return;
    }
    else if (computerScore.innerText == "5"){
        title.innerText = `Game End: You Lost ${playerScore.innerText} - 5`;
        return;
    }

}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => { button.addEventListener('click', buttonClick) });



