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
    // return "Match Tie!";
    playerScore+=0;
    computerScore+=0;
  }else if(lowerCasePlayerSelection==="rock" && computerSelection==="scissors"){
    playerScore+=1;
    // return "You Win! Rock beats Scissor";
  }else if(lowerCasePlayerSelection==="rock" && computerSelection==="paper"){
    computerScore+=1;
    // return "You Lose! Paper beats Rock";
  }else if(lowerCasePlayerSelection==="paper" && computerSelection==="rock"){
    playerScore+=1;
    // return "You Win! Paper beats Rock";
  }else if(lowerCasePlayerSelection==="paper" && computerSelection==="scissors"){
    computerScore+=1;
    // return "You Lose! Scissors beats Paper";
  }else if(lowerCasePlayerSelection==="scissors" && computerSelection==="rock"){
    computerScore+=1;
    // return "You Lose! Rock beats Scissors";
  }else if(lowerCasePlayerSelection==="scissors" && computerSelection==="paper"){
    playerScore+=1;
    // return "You Win! Scissors beats Paper";
  }
}
function game(playerSelection){
  while(playerScore<5 || computerScore<5){
    console.log(playerScore+" "+computerScore);
    // const playerSelection=prompt("Enter one of \"Rock\", or \"Paper\", or \"Scissors\": ");
    
    // console.log(playerSelection);
    const computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    const results=document.querySelector(".results");
    results.textContent=`Your score: ${playerScore} & Computer score: ${computerScore}`;
    if(playerScore===5 || computerScore===5){
      if(playerScore>computerScore){
        results.textContent="You are Winner!";
      }else{
        results.textContent="Computer is Winner!";
      }
      playerScore=0;
      computerScore=0;
      break;
    }
  }
}
let playerScore=0;
let computerScore=0;
let playerSelection;
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