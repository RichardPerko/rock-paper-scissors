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


function game(playerChoice){
    let playerSelection = playerChoice;
    let computerSelection = computerPlay()

    console.log (playRound(playerSelection, computerSelection))
  
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
 } else if (playerSelection === "rock" && computerSelection === "scissors"){
    results.textContent = "Player wins! Rock beats Scissors!"
 } else if (playerSelection === "scissors" && computerSelection === "paper"){
    results.textContent = "Player wins! Scissors beats paper!"
 } else if (playerSelection === "paper" && computerSelection === "rock"){
    results.textContent = "Player wins! Paper beats Rock!"
 } else if (computerSelection === "rock" && playerSelection === "scissors"){
    results.textContent = "Computer wins! Rock beats Scissors!"
 } else if (computerSelection === "scissors" && playerSelection === "paper"){
    results.textContent = "Computer wins! Scissors beats paper!"
 }  else if (computerSelection === "paper" && playerSelection === "rock"){
    results.textContent = "Computer wins! Paper beats Rock!"
 }
}