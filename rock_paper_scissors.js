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
    playerScore+=0;
    computerScore+=0;
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
  }
}
function game(playerSelection){
  // console.log(playerScore+" "+computerScore);
  // const playerSelection=prompt("Enter one of \"Rock\", or \"Paper\", or \"Scissors\": ");  
  // console.log(playerSelection);
  finalResult.textContent="";
  const computerSelection=getComputerChoice();
  if(playerScore<=5 && computerScore<=5){
  results.textContent=playRound(playerSelection,computerSelection);
  scores.textContent=`Your score: ${playerScore} & Computer score: ${computerScore}`;
  }
  if(playerScore===5 || computerScore===5){
    if(playerScore>computerScore){
      finalResult.textContent="Tournament is Over & You are Winner!";
    }else{
      finalResult.textContent="Tournament is Over & Computer is Winner!";
    }
    playerScore=0;
    computerScore=0;
  }
}
let playerScore=0;
let computerScore=0;
let playerSelection;
const results=document.querySelector(".results");
const scores=document.querySelector(".scores");
const finalResult=document.querySelector(".finalResult");
const rockSelection=document.querySelector(".rock");
rockSelection.addEventListener("click",()=>{
  playerSelection="rock";
  game(playerSelection);
});
const paperSelection=document.querySelector(".paper");
paperSelection.addEventListener("click",()=>{
  playerSelection="paper";
  game(playerSelection);
});
const scissorsSelection=document.querySelector(".scissors");
scissorsSelection.addEventListener("click",()=>{
  playerSelection="scissors";
  game(playerSelection);
});