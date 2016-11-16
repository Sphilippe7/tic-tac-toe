'use strict';


const authEvents = require('./auth/events.js');
const api = require('./auth/api.js');

// On document ready
$(() => {
  authEvents.addHandlers();
});

//
// let currentPlayer;
// let count = 1;
//
//
// //Game Board Positioning
// let gameBoardArray = [["box", "box", "box"],["box", "box", "box"],["box", "box", "box"]];
//
//
// //Winning the game
// let checkforwinner = function() {
//   if((gameBoardArray[0][0] === "x" && gameBoardArray[0][1] === "x" && gameBoardArray[0][2] === "x")||
//   (gameBoardArray[1][0] === "x" && gameBoardArray[1][1] === "x" && gameBoardArray[1][2] === "x") ||
//   (gameBoardArray[2][0] === "x" && gameBoardArray[2][1] === "x" && gameBoardArray[2][2] === "x") ||
//   (gameBoardArray[0][0] === "x" && gameBoardArray[1][0] === "x" && gameBoardArray[2][0] === "x") ||
//   (gameBoardArray[0][1] === "x" && gameBoardArray[1][1] === "x" && gameBoardArray[2][1] === "x") ||
//   (gameBoardArray[0][2] === "x" && gameBoardArray[1][2] === "x" && gameBoardArray[2][2] === "x") ||
//
//   (gameBoardArray[0][0] === "x" && gameBoardArray[1][1] === "x" && gameBoardArray[2][2] === "x") ||
//
//   (gameBoardArray[0][2] === "x" && gameBoardArray[1][1] === "x" && gameBoardArray[2][1] === "x")
//   )
//   {
//     $('.display-winner').text('Player 1 Wins!');
//   }
//
//
// if((gameBoardArray[0][0] === "o" && gameBoardArray[0][1] === "o" && gameBoardArray[0][2] === "o") ||
//   (gameBoardArray[1][0] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[1][2] === "o") ||
//   (gameBoardArray[2][0] === "o" && gameBoardArray[2][1] === "o" && gameBoardArray[2][2] === "o") ||
//   (gameBoardArray[0][0] === "o" && gameBoardArray[1][0] === "o" && gameBoardArray[2][0] === "o") ||
//   (gameBoardArray[0][1] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[2][1] === "o") ||
//   (gameBoardArray[0][2] === "o" && gameBoardArray[1][2] === "o" && gameBoardArray[2][2] === "o") ||
//   (gameBoardArray[0][0] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[2][2] === "o") ||
//   (gameBoardArray[0][2] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[2][1] === "o")
//   )
//   {
//   $('.display-winner').text('Player 2 Wins!');
//   }
// //if 9 turns have passed and there is no winner then its a tie!
// if(count === 9) {
//   $('.display-winner').text('Its a Tie!');
// }
// };
//
// const recordMove = function (box) {
//   let value, index, row, col;
//   if (box === '.tl') {
//     index = 0;
//     row = 0;
//     col = 0;
//   } else if(box === '.tm') {
//     row = 0;
//     col = 1;
//     index = 1;
//   }
//   else if(box === '.tr') {
//     row = 0;
//     col = 2;
//     index = 2;
//   }
//   else if(box === '.ml') {
//     row = 1;
//     col = 0;
//     index = 3;
//   }
//   else if(box === '.mm') {
//     row = 1;
//     col = 1;
//     index = 4;
//   }
//   else if(box === '.mr') {
//     row = 1;
//     col = 2;
//     index = 5;
//   }
//   else if(box === '.bl') {
//     row = 2;
//     col = 0;
//     index = 6;
//   }
//   else if(box === '.bm') {
//     row = 2;
//     col = 1;
//     index = 7;
//   }
//   else if(box === '.br') {
//     row = 2;
//     col = 2;
//     index = 8;
//   }
//
//   if (gameBoardArray[row][col] === "box") {
//     if (count % 2 === 0) {
//       currentPlayer = "Player1";
//       $(box).text('o');
//       value = gameBoardArray[row][col] = 'o';
//     }
//     else {
//       currentPlayer = "Player2";
//       $(box).text('x');
//       value = gameBoardArray[row][col] = 'x';
//     }
//     count++;
//     let data = {
//       game: {
//         index,
//         value,
//       }
//     };
//     api.updategame(data).then(function(game) {
//       api.game = game;
//     }).catch(function(error) {
//       console.error(error);
//     });
//   }
//   checkforwinner();
//
// };
// const enableGame = function(){
//   $(".tl").click(function(){
//     recordMove('.tl');
//
//   });
//
//   $(".tm").click(function(){
//     recordMove('.tm');
//
//   });
//
//   $(".tr").click(function(){
//     recordMove('.tr');
//
//   });
//
//   $(".ml").click(function(){
//     recordMove('.ml');
//
//   });
//
//   $(".mm").click(function(){
//     recordMove('.mm');
//
//   });
//
//   $(".mr").click(function(){
//     recordMove('.mr');
//
//   });
//
//   $(".bl").click(function(){
//     recordMove('.bl');
//
//   });
//
//   $(".bm").click(function(){
//     recordMove('.bm');
//
//   });
//
//   $(".br").click(function(){
//     recordMove('.br');
//
//   });
// };
