//game function will start the process of playing the game

const rock = document.querySelector('#rock');
rock.onclick = () => game("rock");

const paper = document.querySelector('#paper');
paper.onclick = () => game("paper");

const scissors = document.querySelector('#scissors');
scissors.onclick = () => game("scissors");

const displayResults = document.querySelector('#displayResults')
const results = document.createElement('div')
results.classList.add('results');

displayResults.append(results);
var playerWin;
var computerWin;
var drawRound;

let playerScore = 0;
let computerScore = 0;
let draws = 0;

function game(playerChoice){
    let playerSelection = playerChoice;
    let computerSelection = computerPlay()

    let result = playRound(playerSelection, computerSelection)
    if (result === "playerWin"){
       playerScore++;
       console.log("player: ",playerScore)
    } else if (result === "drawRound") {
       draws++;
       console.log("draws", draws)
    } else {
       computerScore++;
       console.log("computer: ", computerScore)
    }
    
    if (playerScore === 5){
       console.log("Player wins!")
       resetScore();
    } else if (computerScore === 5){
       console.log("Computer Wins")
       resetScore();
    }
}

function resetScore(){
   playerScore = 0;
   computerScore = 0;
   draws = 0;
}

//gets the result of the computer by randomly generating a number
//and then using switch statments to return the choice
function computerPlay(){
   let computerResult = Math.floor(Math.random() * 3) + 1
   switch (computerResult){
       case 1:
           console.log("Computers choice: Rock")
           return "rock"
           break;
       case 2:
           console.log("Computers choice: Paper")
           return "paper"
           break;
       case 3:
           console.log("Computers choice: Scissors")
           return "scissors"
           break;
   }
}

//playRound will return the result of both the computer and players choice
//using if else if statements and logical comparisons to find the result
function playRound(playerSelection, computerSelection){
 if (playerSelection === computerSelection){
     results.textContent = "Draw!"
     return "drawRound";
 } else if (playerSelection === "rock" && computerSelection === "scissors"){
    results.textContent = "Player wins! Rock beats Scissors!"
    return "playerWin"
 } else if (playerSelection === "scissors" && computerSelection === "paper"){
    results.textContent = "Player wins! Scissors beats paper!"
    return "playerWin"
 } else if (playerSelection === "paper" && computerSelection === "rock"){
    results.textContent = "Player wins! Paper beats Rock!"
    return "playerWin"
 } else if (computerSelection === "rock" && playerSelection === "scissors"){
    results.textContent = "Computer wins! Rock beats Scissors!"
    return "computerWin"
 } else if (computerSelection === "scissors" && playerSelection === "paper"){
    results.textContent = "Computer wins! Scissors beats paper!"
    return "computerWin"
 }  else if (computerSelection === "paper" && playerSelection === "rock"){
    results.textContent = "Computer wins! Paper beats Rock!"
    return "computerWin"
 }
}