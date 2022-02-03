//game function will start the process of playing the game

//needed variables to be able to run the game
var playerWin;
var computerWin;
var drawRound;

let playerScore = 0;
let computerScore = 0;
let draws = 0;

//selectors that allow us to click the buttons and return the results
const rock = document.querySelector('#rock');
rock.onclick = () => game("rock");

const paper = document.querySelector('#paper');
paper.onclick = () => game("paper");

const scissors = document.querySelector('#scissors');
scissors.onclick = () => game("scissors");

//dom manipulations to print the results of the game
const displayResults = document.querySelector('#displayResults')
const results = document.createElement('div');
results.classList.add('results');
displayResults.append(results);

const score = document.querySelector('#displayScore');
const scoreKeeper = document.createElement('div');
scoreKeeper.classList.add('scoreKeeper');
score.append(scoreKeeper);

//main function
function game(playerChoice){
   console.log("Player choice: "+playerChoice);
   // gathers the information to play the game, players choice is passed in
   // through the button click, while computer choice calls a function
    let playerSelection = playerChoice;
    let computerSelection = computerPlay()
   //calls the play function that compares the two selections
    let result = playRound(playerSelection, computerSelection)
    // if statements that will keep track of the score and print the score totals after each round.
    if (result === "playerWin"){
       playerScore++;
       scoreKeeper.textContent = "Player: " + playerScore + " Computer: " + computerScore ;
    } else if (result === "drawRound") {
       draws++;
       scoreKeeper.textContent= "Player: " + playerScore + " Computer: " + computerScore ;
    } else {
       computerScore++;
       scoreKeeper.textContent= "Player: " + playerScore + " Computer: " + computerScore ;
    }
    // scorekeeper that determines the winner of the game and prints the message
    if (playerScore === 5){
       results.textContent= "Player wins the game!"
       resetScore();
    } else if (computerScore === 5){
       results.textContent = "Computer wins the game!"
       resetScore();
    }
}

//resets the score for a new game
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
           console.log("Computer choice: rock")
           return "rock"
           break;
       case 2:
          console.log("Computer choice: paper")
           return "paper"
           break;
       case 3:
          console.log("Computer choice: scissors")
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