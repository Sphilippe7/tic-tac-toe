'use strict';


const authEvents = require('./auth/events.js');
// On document ready
$(() => {
  console.log("ready");
  authEvents.addHandlers();
});

let currentPlayer;
let count = 1;



//Game Board Positioning
let gameBoardArray = [["box", "box", "box"],["box", "box", "box"],["box", "box", "box"]];


//Winning the game
let checkforwinner = function() {
  if((gameBoardArray[0][0] === "x" && gameBoardArray[0][1] === "x" && gameBoardArray[0][2] === "x")||
(gameBoardArray[1][0] === "x" && gameBoardArray[1][1] === "x" && gameBoardArray[1][2] === "x") ||
(gameBoardArray[2][0] === "x" && gameBoardArray[2][1] === "x" && gameBoardArray[2][2] === "x") ||
(gameBoardArray[0][0] === "x" && gameBoardArray[1][0] === "x" && gameBoardArray[2][0] === "x") ||
(gameBoardArray[0][1] === "x" && gameBoardArray[1][1] === "x" && gameBoardArray[2][1] === "x") ||
(gameBoardArray[0][2] === "x" && gameBoardArray[1][2] === "x" && gameBoardArray[2][2] === "x") ||

(gameBoardArray[0][0] === "x" && gameBoardArray[1][1] === "x" && gameBoardArray[2][2] === "x") ||

(gameBoardArray[0][2] === "x" && gameBoardArray[1][1] === "x" && gameBoardArray[2][1] === "x")
)
{alert("Player1 Wins!");}

if((gameBoardArray[0][0] === "o" && gameBoardArray[0][1] === "o" && gameBoardArray[0][2] === "o") ||
(gameBoardArray[1][0] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[1][2] === "o") ||
(gameBoardArray[2][0] === "o" && gameBoardArray[2][1] === "o" && gameBoardArray[2][2] === "o") ||
(gameBoardArray[0][0] === "o" && gameBoardArray[1][0] === "o" && gameBoardArray[2][0] === "o") ||
(gameBoardArray[0][1] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[2][1] === "o") ||
(gameBoardArray[0][2] === "o" && gameBoardArray[1][2] === "o" && gameBoardArray[2][2] === "o") ||
(gameBoardArray[0][0] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[2][2] === "o") ||
(gameBoardArray[0][2] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[2][1] === "o")
)
{alert("Player2 Wins!");}
};



$(".tl").click(function(){
  if (gameBoardArray[0][0] === "box") {
    if (count % 2 === 0) {
      currentPlayer = "Player1";
      $('.tl').text('x');
      gameBoardArray[0][0] = 'x';
    }
    else {
      currentPlayer = "Player2";
      $('.tl').text('o');
      gameBoardArray[0][0] = 'o';
    }
    count++;
  }
  checkforwinner();
});

$(".tm").click(function(){
  if (gameBoardArray[0][1] === "box") {
    if (count % 2 === 0) {
      currentPlayer = "Player1";
      $('.tm').text('x');
      gameBoardArray[0][1] = 'x';
    }
    else {
      currentPlayer = "Player2";
      $('.tm').text('o');
      gameBoardArray[0][1] = 'o';
    }
    count++;
  }
  checkforwinner();
});

$(".tr").click(function(){
  if (gameBoardArray[0][2] === "box") {
    if (count % 2 === 0) {
      currentPlayer = "Player1";
      $('.tr').text('x');
      gameBoardArray[0][2] = 'x';
    }
    else {
      currentPlayer = "Player2";
      $('.tr').text('o');
      gameBoardArray[0][2] = 'o';
    }
    count++;
  }
  checkforwinner();
});

$(".ml").click(function(){
  if (gameBoardArray[1][0] === "box") {
    if (count % 2 === 0) {
      currentPlayer = "Player1";
      $('.ml').text('x');
      gameBoardArray[1][0] = 'x';
    }
    else {
      currentPlayer = "Player2";
      $('.ml').text('o');
      gameBoardArray[1][0] = 'o';
    }
    count++;
  }
  checkforwinner();
});

$(".mm").click(function(){
  if (gameBoardArray[1][1] === "box") {
    if (count % 2 === 0) {
      currentPlayer = "Player1";
      $('.mm').text('x');
      gameBoardArray[1][1] = 'x';
    }
    else {
      currentPlayer = "Player2";
      $('.mm').text('o');
      gameBoardArray[1][1] = 'o';
    }
    count++;
  }
  checkforwinner();
});

$(".mr").click(function(){
  if (gameBoardArray[1][2] === "box") {
    if (count % 2 === 0) {
      currentPlayer = "Player1";
      $('.mr').text('x');
      gameBoardArray[1][2] = 'x';
    }
    else {
      currentPlayer = "Player2";
      $('.mr').text('o');
      gameBoardArray[1][2] = 'o';
    }
    count++;
  }
  checkforwinner();
});

$(".bl").click(function(){
  if (gameBoardArray[2][0] === "box") {
    if (count % 2 === 0) {
      currentPlayer = "Player1";
      $('.bl').text('x');
      gameBoardArray[2][0] = 'x';
    }
    else {
      currentPlayer = "Player2";
      $('.bl').text('o');
      gameBoardArray[2][0] = 'o';
    }
    count++;
  }
  checkforwinner();
});

$(".bm").click(function(){
  if (gameBoardArray[2][1] === "box") {
    if (count % 2 === 0) {
      currentPlayer = "Player1";
      $('.bm').text('x');
      gameBoardArray[2][1] = 'x';
    }
    else {
      currentPlayer = "Player2";
      $('.bm').text('o');
      gameBoardArray[2][1] = 'o';
    }
    count++;
  }
  checkforwinner();
});

$(".br").click(function(){
  if (gameBoardArray[2][2] === "box") {
    if (count % 2 === 0) {
      currentPlayer = "Player1";
      $('.br').text('x');
      gameBoardArray[2][2] = 'x';
    }
    else {
      currentPlayer = "Player2";
      $('.br').text('o');
      gameBoardArray[2][2] = 'o';
    }
    count++;
  }
  checkforwinner();
});
