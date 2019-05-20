'use strict'
var rockBtn = document.getElementById('rock-btn');
var paperBtn = document.getElementById('paper-btn');
var scissorsBtn = document.getElementById('scissors-btn');
var output = document.getElementById('result-output');
var firstMessage = 'What you choose? Rock, paper or scissors?';
//var buttons = document.getElementsByClassName('buttons');
var outputPlayerScore = document.getElementById('player-result');
var outputComputerScore = document.getElementById('pc-result');
var outputRound = document.getElementById('round');
var outputRoundsLeft = document.getElementById('rounds-left');

var results = {
  round: 0,
  userResult: 0,
  computerResult: 0,
};

var resultsOutput = function(text) {
  output.innerHTML = text;
};

//First message
resultsOutput(firstMessage);

//Player move
var playerMove = function(playerChoice) {
  var computerChoice = randomPcChoice();
  results.round += 1;
  outputRound.innerHTML = results.round;
//rock = 1
//paper = 2
//scissors = 3
  if (computerChoice === 1) {
    computerChoice = 'ROCK';
  }
  else if (computerChoice === 2) {
    computerChoice = 'PAPER';
  }
  else {
    computerChoice = 'SCISSORS';
  }
  
  if (playerChoice === computerChoice) {
    resultsOutput('DRAW!<br>You and Computer played:<br>' + playerChoice);
  }
  else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') || (playerChoice === 'PAPER' && computerChoice === 'ROCK') || (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
    resultsOutput('YOU WON!<br>You played: ' + playerChoice + '<br>' + 'Computer played: ' + computerChoice);
    results.userResult += 1;
    outputPlayerScore.innerHTML = results.userResult;
  }
  else {
    resultsOutput('YOU LOST!<br>You played: ' + playerChoice + '<br>' + 'Computer played: ' + computerChoice);
    results.computerResult += 1;
    outputComputerScore.innerHTML = results.computerResult;
  }
    //console.log(results);
    //console.log(playerChoice);
    //console.log(computerChoice);
};

//Random computer choice
var randomPcChoice = function() {
  return Math.floor(Math.random() * 3 + 1);
};

rockBtn.addEventListener('click', function() {
  playerMove('ROCK');
});

paperBtn.addEventListener('click', function() {
  playerMove('PAPER');
});

scissorsBtn.addEventListener('click', function() {
  playerMove('SCISSORS');
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
