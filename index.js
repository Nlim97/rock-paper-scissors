const ans = ["rock", "paper", "scissors"];
const randomNumber = Math.floor(Math.random() * 3);
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
function getComputerChoice(arr, num){
    return arr[num];
}
function getHumanChoice(){
    const humanChoice = prompt("Enter your choice here: ").toLowerCase();
    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
        alert("Enter rock, paper or scissors")
    }
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
    for(let i = 0; i < 5; i++){
        playRound(getComputerChoice, getHumanChoice)
    }
    if(playerScore > computerScore){
        console.log("player wins game")
    }else if(computerScore > playerScore){
        console.log("computer wins game")
    }else{
        console.log("Draw!! no winner")
    }
}
    

playGame();
