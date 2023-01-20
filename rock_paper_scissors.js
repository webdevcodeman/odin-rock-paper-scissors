"use strict";
function getComputerChoice(){
  let randomNumber=Math.floor(Math.random()*(9-1+1))+1;
  // console.log(randomNumber);
  // console.log(Math.floor(randomNumber));
  if(randomNumber>=1 && randomNumber<=3){
    return "rock";
  }else if(randomNumber>=4 && randomNumber<=6){
    return "paper";
  }else{
    return "scissors";
  }
}
function playRound(playerSelection, computerSelection){
  const lowerCasePlayerSelection=playerSelection.toLowerCase();
  // console.log(lowerCasePlayerSelection);
  // console.log(computerSelection);
  if((lowerCasePlayerSelection==="rock" && computerSelection==="rock") || (lowerCasePlayerSelection==="paper" && computerSelection==="paper") || (lowerCasePlayerSelection==="scissors" && computerSelection==="scissors")){
    return "Match Tie!";
  }else if(lowerCasePlayerSelection==="rock" && computerSelection==="scissors"){
    playerScore+=1;
    return "You Win! Rock beats Scissor";
  }else if(lowerCasePlayerSelection==="rock" && computerSelection==="paper"){
    computerScore+=1;
    return "You Lose! Paper beats Rock";
  }else if(lowerCasePlayerSelection==="paper" && computerSelection==="rock"){
    playerScore+=1;
    return "You Win! Paper beats Rock";
  }else if(lowerCasePlayerSelection==="paper" && computerSelection==="scissors"){
    computerScore+=1;
    return "You Lose! Scissors beats Paper";
  }else if(lowerCasePlayerSelection==="scissors" && computerSelection==="rock"){
    computerScore+=1;
    return "You Lose! Rock beats Scissors";
  }else if(lowerCasePlayerSelection==="scissors" && computerSelection==="paper"){
    playerScore+=1;
    return "You Win! Scissors beats Paper";
  }else{
    return "Invalid input";
  }
}
function game(){
  for(let i=0;i<5;i++){
    const playerSelection=prompt("Enter one of \"Rock\", or \"Paper\", or \"Scissors\": ");
    const computerSelection=getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
  }
  if(playerScore===computerScore){
    console.log("Tournament Tie!");
  }else if(playerScore>computerScore){
    console.log("You Win!");
  }else{
    console.log("You Lose!");
  }
}
let playerScore=0;
let computerScore=0;
game();