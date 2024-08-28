const ans = ["rock", "paper", "scissors"];
const randomNumber = Math.floor(Math.random() * 3);
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const choice = document.querySelectorAll(".choice")
let humanChoice = ""
for(let i = 0; i < choice.length; i++){
    choice[i].addEventListener("click", (e) => {
            humanChoice = e.target.textContent
    })
}

const start = document.querySelector(".start")

start.addEventListener("click", playGame)

function getComputerChoice(arr, num){
    return arr[num];
}
function getHumanChoice(){
    console.log(humanChoice.length)
    return humanChoice;
}

function playRound(compChoice, humanChoice){
    const playerChoice = humanChoice();
    const cpuChoice = compChoice(ans, randomNumber);
    if(playerChoice === "rock" && cpuChoice === "scissors"){
        playerScore++;
        console.log("you win")
    }else if (playerChoice === "scissors" && cpuChoice === "rock"){
        computerScore++;
        console.log("cpu wins")
        rounds++
    }else if(playerChoice === "paper" && cpuChoice === "rock"){
        playerScore++;
        console.log("you win")
        rounds++
    }else if(playerChoice === "rock" && cpuChoice === "paper"){
        computerScore++;
        console.log("cpu wins")
        rounds++
    }else if(playerChoice === "scissors" && cpuChoice === "paper"){
        playerScore++;
        console.log("you win")
        rounds++
    }else if(playerChoice === "paper" && cpuChoice === "scissors"){
        computerScore++;
        console.log("cpu wins")
        rounds++
    }else if(playerChoice === cpuChoice){
        console.log("draw")
        rounds++
    }

}


function playGame(){
    if(rounds < 5){
        playRound(getComputerChoice, getHumanChoice)
    }
    else{
        if(playerScore > computerScore){
            console.log("player wins game")
        }else if(computerScore > playerScore){
            console.log("computer wins game")
        }else{
            console.log("Draw!! no winner")
        }
    }
    
}