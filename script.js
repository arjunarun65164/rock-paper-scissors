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
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return true;
    }
    else if (playerSelection === computerSelection) {
        console.log(`Draw`);
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
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


function buttonClick(e) {
    let playerSelection = this.className;
    let computerSelection = getComputerChoice();
    console.log(this.className);

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

    // setTimeout(()=>{
    //     if (!(playerScore === 5 || computerScore === 5)) title.innerText = "Pick your Weapon:";
    // }, 500); //makes the heading return to "pick your weapon" after two seconds

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



