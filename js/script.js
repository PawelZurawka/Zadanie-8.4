'use strict'
debugger;
var rockBtn = document.getElementById('rock-btn');
var paperBtn = document.getElementById('paper-btn');
var scissorsBtn = document.getElementById('scissors-btn');
var output = document.getElementById('result-output');
var firstMessage = 'What you choose? Stone, paper or scissors?';


var resultsOutput = function(text) {
  output.innerHTML = text;
}

resultsOutput(firstMessage);

//Random computer choice

var randomPcChoice = function() {
    var randomPcChoice = Math.floor(Math.random() * 3 + 1);
    return randomPcChoice;
}

var buttons = document.getElementsByClassName('button');

buttons = ['rock', 'paper', 'scissors'];


for (var i = 0; i < buttons.length; i++){
}
var currentElement = buttons[i];







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
