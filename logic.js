
//game function will start the process of playing the game
game()

function game(){
    let playerSelection = playerPlay()
    let computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
  
}

//asks the player for their input and returns the result 
function playerPlay(){
   let playerChoice = window.prompt("Rock, Paper, or Scissors?");
    console.log("Players choice: ", playerChoice);
   return playerChoice.toLowerCase()
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

//playRound will return the result of both the computer and players choice
//using if else if statements and logical comparisons to find the result
function playRound(playerSelection, computerSelection){
 if (playerSelection === computerSelection){
   return "Draw!"
 } else if (playerSelection === "rock" && computerSelection === "scissors"){
     return "Player wins! Rock beats Scissors!"
 } else if (playerSelection === "scissors" && computerSelection === "paper"){
     return "Player wins! Scissors beats paper!"
 } else if (playerSelection === "paper" && computerSelection === "pock"){
     return "Player wins! Paper beats Rock!"
 } else if (computerSelection === "rock" && playerSelection === "scissors"){
     return "Computer wins! Rock beats Scissors!"
 } else if (computerSelection === "scissors" && playerSelection === "paper"){
     return "Computer wins! Scissors beats paper!"
 }  else if (computerSelection === "paper" && playerSelection === "rock"){
     return "Computer wins! Paper beats Rock!"
 }
}

}