'use strict'
var rockBtn = document.getElementById('rock-btn');
var paperBtn = document.getElementById('paper-btn');
var scissorsBtn = document.getElementById('scissors-btn');
var output = document.getElementById('result-output');
var firstMessage = 'What you choose? Rock, paper or scissors?';
//var buttons = document.getElementsByClassName('allbuttons');

var resultsOutput = function(text) {
  output.innerHTML = text;
};

//function numToText(result) {
 // if (result == 1) {
 //   return "ROCK";
 // } else if (result == 2) {
 //   return "PAPER";
 // } else if (result == 3) {
 //   return "SCISSORS";
 // }
//}

//First message
resultsOutput(firstMessage);

//Player move
var playerMove = function(playerChoice) {
  var computerChoice = randomPcChoice();

  if (computerChoice === 1) {
    computerChoice = 'ROCK';
  }

  else if (computerChoice === 2) {
    computerChoice = 'PAPER';
  }

  else {
    computerChoice = 'SCISSORS';
  }
  //rock = 1
  //paper = 2
  //scissors = 3
  if (playerChoice === computerChoice) {
      resultsOutput('Computer choose ' + computerChoice + '<br>REMIS!<br>');
  }
  else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') || (playerChoice === 'PAPER' && computerChoice === 'ROCK') || (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
    resultsOutput('Computer choose ' + computerChoice + '<br>WYGRAŁEŚ!<br>');
  }
  else {
    resultsOutput('Computer choose ' + computerChoice + '<br>PRZEGRAŁEŚ!<br>');
  }
    console.log(playerChoice);
    console.log(computerChoice);
};

//Random computer choice
var randomPcChoice = function() {
  return Math.floor(Math.random() * 3 + 1);
};

rockBtn.addEventListener('click', function() {
  playerMove('ROCK');
  output.insertAdjacentHTML('afterbegin', 'You choose ROCK<br>');
});

paperBtn.addEventListener('click', function() {
  playerMove('PAPER');
  output.insertAdjacentHTML('afterbegin', 'You choose PAPER<br>');
});

scissorsBtn.addEventListener('click', function() {
  playerMove('SCISSORS');
  output.insertAdjacentHTML('afterbegin', 'You choose SCISSORS<br>');
});

/*


buttons.addEventListener('click', function() {
  alert('test');
});

var buttonsArray = ['rock', 'paper', 'scissors'];



for (var i = 0; i < buttons.length; i++){
}

var currentElement = buttons[i];
*/






/*var rock = rockBtn.dataset.rock;
var paper = paperBtn.dataset.paper;
var scissors = scissorsBtn.dataset.scissors;*/

//e.target.getAttribute('data-move')


/*rockBtn.addEventListener('click', function() {
  //???
       resultsOutput('You click on stone');
});

paperBtn.addEventListener('click', function() {
     playerMove("paper");
     output.innerHTML = 'You click on paper';
});

scissorsBtn.addEventListener('click', function() {
      playerMove("scissors");
      output.innerHTML = 'You click on scissors';
});*/

//Computer random choice
/*var randomComputerChoice = function { 
}*/
/*var playerMove;
var computerMove = ???(Math.floor(Math.random() * 3);
var playerMove = function(move) {
  this.
}*/
