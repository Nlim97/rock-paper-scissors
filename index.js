let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let humanChoice = ""
let battleStory = ""

const start = document.querySelector(".start").addEventListener("click", playGame)
const playerScoreLive = document.querySelector(".player")
const cpuScoreLive = document.querySelector(".cpu")
const header = document.querySelector("h1")
const liveRounds = document.querySelector(".round")
const cpuChoiceDisplay = document.querySelector(".cpu-choice")

function getComputerChoice(){
    const ans = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3)
    return ans[randomNumber]
}

function handleClick(e){
    humanChoice = e.target.innerText
    const cpuChoice = getComputerChoice()
    cpuChoiceDisplay.innerHTML = ` cpu chose ${cpuChoice} and you chose ${humanChoice.toLowerCase()}`
    playRound(cpuChoice, humanChoice.toLowerCase())
}

function playRound(cpuChoice, playerChoice){
    if(playerChoice === "rock" && cpuChoice === "scissors"){
        playerScore++;
        rounds++
        header.innerHTML = "You win"
    }else if (playerChoice === "scissors" && cpuChoice === "rock"){
        computerScore++;
        rounds++
        header.innerHTML = "Cpu wins"
    }else if(playerChoice === "paper" && cpuChoice === "rock"){
        playerScore++;
        rounds++
        header.innerHTML = "You win"
    }else if(playerChoice === "rock" && cpuChoice === "paper"){
        computerScore++;
        rounds++
        header.innerHTML = "Cpu wins"
    }else if(playerChoice === "scissors" && cpuChoice === "paper"){
        playerScore++;
        rounds++
        header.innerHTML = "You win"
    }else if(playerChoice === "paper" && cpuChoice === "scissors"){
        computerScore++;
        rounds++
        header.innerHTML = "Cpu wins"
    }else if(playerChoice === cpuChoice){
        rounds++
        header.innerHTML = "Draw"
    }
    playerScoreLive.innerHTML = `Player score: ${playerScore}`
    cpuScoreLive.innerHTML = `Cpu score: ${computerScore}`
    liveRounds.innerHTML = `Round: ${rounds}`
    if(rounds === 5){
        if(playerScore > computerScore){
            header.innerHTML = "player wins game"
        }else if(computerScore > playerScore){
            header.innerHTML = "computer wins game"
        }else{
            header.innerHTML = "Draw!! no winner" 
        }
        resetGame()
    }

}

function playGame(){
    const choices = document.querySelectorAll(".choice")
    choices.forEach(choice => {
        choice.addEventListener("click", handleClick)
    })

    if(humanChoice.length === 0 && rounds === 0){
        header.innerHTML = "Please select one of the options."
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    humanChoice = ""
    playerScoreLive.innerHTML = `Player score: 0`
    cpuScoreLive.innerHTML = `Cpu score: 0`
    liveRounds.innerHTML = `Round: 0`
    cpuChoiceDisplay.innerHTML = ""
    const choices = document.querySelectorAll(".choice")
    choices.forEach(choice => {
        choice.removeEventListener("click", handleClick)
    })
    setTimeout(() => {
        document.querySelector("h1").innerHTML = "Rock Paper Scissors"
    }, 700)
}

