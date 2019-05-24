'use strict'
var output = document.getElementById('result-output');
var firstMessage = 'Please click <strong>"New Game"</strong> button<br>to set the number of rounds';
var choice = 'What you choose? Rock, paper or scissors?';
var buttons = document.querySelectorAll('.buttons');
var outputPlayerScore = document.getElementById('player-result');
var outputComputerScore = document.getElementById('pc-result');
var outputRound = document.getElementById('round');
var outputRoundsLeft = document.getElementById('rounds-left');
var newGameBtn = document.getElementById('new-game-btn');
var newGameOutput = document.getElementById('new-game-output');

var results = {
  round: 0,
  userResult: 0,
  computerResult: 0,
  roundsLeft: 0,
};
//Random computer choice
var randomPcChoice = function() {
  return Math.floor(Math.random() * 3 + 1);
};

//End game function///////////////
//var endGame = function(text) {/////////////
//  newGameMsg(text);////////////////
//};

newGameBtn.addEventListener('click', function() {
  var numberOfRounds = window.prompt('Enter the number of rounds');
  results.round = 0;////////////////////
  results.userResult = 0;////////////////
  results.computerResult = 0;/////////////////

  if (numberOfRounds == null || numberOfRounds == '') {
    newGameOutput.innerHTML = ('Enter the number of rounds!');
  }

  else if (!isNaN(numberOfRounds)) {
    results.roundsLeft = numberOfRounds;
    outputRoundsLeft.innerHTML = results.roundsLeft;
  }

  else {
    newGameOutput.innerHTML = ('It is not a number!');
  }
});

var resultsOutput = function(text) {
  output.innerHTML = text;
};
var newGameMsg = function(text) {
  newGameOutput.innerHTML = text;
}
//First message
newGameMsg(firstMessage);

//Player move
var playerMove = function(playerChoice) {
  var computerChoice = randomPcChoice();
  results.round += 1;
  outputRound.innerHTML = results.round;
  results.roundsLeft--;
  outputRoundsLeft.innerHTML = results.roundsLeft;
//rock = 1
//paper = 2
//scissors = 3
  if (results.roundsLeft === 0) { /////////////
    newGameMsg(firstMessage); ///////////////////
  }
  else {
    newGameMsg(choice);///////////////
  }
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

  if (results.roundsLeft === 0 && results.userResult > results.computerResult) {///////////////
    resultsOutput('GAME OVER<br><strong>YOU</strong> won entire game!');///////////////////////
    
  }

  else if (results.roundsLeft === 0 && results.userResult < results.computerResult) {///////////
    resultsOutput('GAME OVER<br><strong>COMPUTER</strong> won entire game!');/////////////
  }

  else if (results.roundsLeft === 0 && results.userResult == results.computerResult) {///////////
    resultsOutput('GAME OVER<br><strong>DRAW!</strong>');////////////////////
  }
};

//Player choice
for (var i = 0; i < buttons.length; i++) {
  var self = buttons[i];

  self.addEventListener('click', function (event) {  
      playerMove(event.currentTarget.dataset.move);/////////event?
  }, false);
}


/*
//-Żeby wyzerować pola po skończeniu ostatniej rundy myślę, że lekko bym to zmodyfikował i cały kod odpowiedzialny 
za to co się dzieje jeżeli `results.roundsLeft === 0` przeniósłbym do osobnej funkcji i wywołał ją w odpowiednim 
ifie (if (results.roundsLeft === 0) { endGame(); }), a w środku przez innerHTML wyczyścił potrzebne pola. 
- przenieśmy część odpowiedzialną za 'zakończenie gry' do osobnej funkcji i wywołujmy ją w playerMove jeżeli liczba 
pozostałych rund jest równa 0,
- usuńmy zbędny kod, console-logi,
- przykład z pętlą do buttonów - https://codepen.io/anon/pen/VOyBwO,
*/


/*var rockBtn = document.getElementById('rock-btn');
var paperBtn = document.getElementById('paper-btn');
var scissorsBtn = document.getElementById('scissors-btn');

//Player choice
rockBtn.addEventListener('click', function() {
  if (results.roundsLeft === 0) {////////////////
    newGameMsg(firstMessage);
  }
  else {
    playerMove('ROCK');
    newGameMsg(choice);
  }
});

paperBtn.addEventListener('click', function() {
  if (results.roundsLeft === 0) {////////////
    newGameMsg(firstMessage);
  }
  else {
    playerMove('PAPER');
    newGameMsg(choice);
  }
});

scissorsBtn.addEventListener('click', function() {
  if (results.roundsLeft === 0) {////////////
    newGameMsg(firstMessage);
  }
  else {
    playerMove('SCISSORS');
    newGameMsg(choice);
  }
});*/

/*var rock = rockBtn.dataset.rock;
var paper = paperBtn.dataset.paper;
var scissors = scissorsBtn.dataset.scissors;*/

//e.target.getAttribute('data-move')

