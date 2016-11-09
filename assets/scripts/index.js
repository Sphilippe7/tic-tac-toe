'use strict';


const authEvents = require('./auth/events.js');
const api = require('./auth/api.js');

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
  {
    $('.display-winner').text('Player 1 Wins!');
  }


if((gameBoardArray[0][0] === "o" && gameBoardArray[0][1] === "o" && gameBoardArray[0][2] === "o") ||
  (gameBoardArray[1][0] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[1][2] === "o") ||
  (gameBoardArray[2][0] === "o" && gameBoardArray[2][1] === "o" && gameBoardArray[2][2] === "o") ||
  (gameBoardArray[0][0] === "o" && gameBoardArray[1][0] === "o" && gameBoardArray[2][0] === "o") ||
  (gameBoardArray[0][1] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[2][1] === "o") ||
  (gameBoardArray[0][2] === "o" && gameBoardArray[1][2] === "o" && gameBoardArray[2][2] === "o") ||
  (gameBoardArray[0][0] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[2][2] === "o") ||
  (gameBoardArray[0][2] === "o" && gameBoardArray[1][1] === "o" && gameBoardArray[2][1] === "o")
  )
  {
  $('.display-winner').text('Player 2 Wins!');
  }
//if 9 turns have passed and there is no winner then its a tie!
if(count === 9) {
  $('.display-winner').text('Its a Tie!');
}
};

const recordMove = function (box) {
  let value, index, row, col;
  if (box === '.tl') {
    index = 0;
    row = 0;
    col = 0;
  } else if(box === '.tm') {
    row = 0;
    col = 1;
    index = 1;
  }
  else if(box === '.tr') {
    row = 0;
    col = 2;
    index = 2;
  }
  else if(box === '.ml') {
    row = 1;
    col = 0;
    index = 3;
  }
  else if(box === '.mm') {
    row = 1;
    col = 2;
    index = 4;
  }
  else if(box === '.mr') {
    row = 1;
    col = 2;
    index = 5;
  }
  else if(box === '.bl') {
    row = 2;
    col = 0;
    index = 6;
  }
  else if(box === '.bm') {
    row = 2;
    col = 1;
    index = 7;
  }
  else if(box === '.br') {
    row = 2;
    col = 2;
    index = 8;
  }
  if (gameBoardArray[row][col] === "box") {
    if (count % 2 === 0) {
      currentPlayer = "Player1";
      $(box).text('o');
      value = gameBoardArray[row][col] = 'o';
    }
    else {
      currentPlayer = "Player2";
      $(box).text('x');
      value = gameBoardArray[row][col] = 'x';
    }
    count++;
    let data = {
      game: {
        index,
        value,
      }
    };
    api.updategame(data).then(function(game) {
      api.game = game;
    }).catch(function(error) {
      console.error(error);
    });
  }
  checkforwinner();

};


$(".tl").click(function(){
  recordMove('.tl');
  // let value = null;
  // let index = 0;
  // if (gameBoardArray[0][0] === "box") {
  //   if (count % 2 === 0) {
  //     currentPlayer = "Player1";
  //     $('.tl').text('o');
  //     value = gameBoardArray[0][0] = 'o';
  //   }
  //   else {
  //     currentPlayer = "Player2";
  //     $('.tl').text('x');
  //     value = gameBoardArray[0][0] = 'x';
  //   }
  //   count++;
  //   let data = {
  //     game: {
  //       index,
  //       value,
  //     }
  //   };
  //   api.updategame(data).then(function(game) {
  //     api.game = game;
  //   }).catch(function(error) {
  //     console.error(error);
  //   });
  // }
  //checkforwinner();
});

$(".tm").click(function(){
  recordMove('.tm');
  // if (gameBoardArray[0][1] === "box") {
  //   if (count % 2 === 0) {
  //     currentPlayer = "Player1";
  //     $('.tm').text('o');
  //     gameBoardArray[0][1] = 'o';
  //   }
  //   else {
  //     currentPlayer = "Player2";
  //     $('.tm').text('x');
  //     gameBoardArray[0][1] = 'x';
  //   }
  //   count++;
  // }
  // checkforwinner();
});

$(".tr").click(function(){
  recordMove('.tr');
  // if (gameBoardArray[0][2] === "box") {
  //   if (count % 2 === 0) {
  //     currentPlayer = "Player1";
  //     $('.tr').text('o');
  //     gameBoardArray[0][2] = 'o';
  //   }
  //   else {
  //     currentPlayer = "Player2";
  //     $('.tr').text('x');
  //     gameBoardArray[0][2] = 'x';
  //   }
  //   count++;
  // }
  // checkforwinner();
});

$(".ml").click(function(){
  recordMove('.ml');
  // if (gameBoardArray[1][0] === "box") {
  //   if (count % 2 === 0) {
  //     currentPlayer = "Player1";
  //     $('.ml').text('o');
  //     gameBoardArray[1][0] = 'o';
  //   }
  //   else {
  //     currentPlayer = "Player2";
  //     $('.ml').text('x');
  //     gameBoardArray[1][0] = 'x';
  //   }
  //   count++;
  // }
  // checkforwinner();
});

$(".mm").click(function(){
  recordMove('.mm');
  // if (gameBoardArray[1][1] === "box") {
  //   if (count % 2 === 0) {
  //     currentPlayer = "Player1";
  //     $('.mm').text('o');
  //     gameBoardArray[1][1] = 'o';
  //   }
  //   else {
  //     currentPlayer = "Player2";
  //     $('.mm').text('x');
  //     gameBoardArray[1][1] = 'x';
  //   }
  //   count++;
  // }
  // checkforwinner();
});

$(".mr").click(function(){
  recordMove('.mr');
  // if (gameBoardArray[1][2] === "box") {
  //   if (count % 2 === 0) {
  //     currentPlayer = "Player1";
  //     $('.mr').text('o');
  //     gameBoardArray[1][2] = 'o';
  //   }
  //   else {
  //     currentPlayer = "Player2";
  //     $('.mr').text('x');
  //     gameBoardArray[1][2] = 'x';
  //   }
  //   count++;
  // }
  // checkforwinner();
});

$(".bl").click(function(){
  recordMove('.bl');
  // if (gameBoardArray[2][0] === "box") {
  //   if (count % 2 === 0) {
  //     currentPlayer = "Player1";
  //     $('.bl').text('o');
  //     gameBoardArray[2][0] = 'o';
  //   }
  //   else {
  //     currentPlayer = "Player2";
  //     $('.bl').text('x');
  //     gameBoardArray[2][0] = 'x';
  //   }
  //   count++;
  // }
  // checkforwinner();
});

$(".bm").click(function(){
  recordMove('.bm');
  // if (gameBoardArray[2][1] === "box") {
  //   if (count % 2 === 0) {
  //     currentPlayer = "Player1";
  //     $('.bm').text('o');
  //     gameBoardArray[2][1] = 'o';
  //   }
  //   else {
  //     currentPlayer = "Player2";
  //     $('.bm').text('x');
  //     gameBoardArray[2][1] = 'x';
  //   }
  //   count++;
  // }
  // checkforwinner();
});

$(".br").click(function(){
  recordMove('.br');
  // if (gameBoardArray[2][2] === "box") {
  //   if (count % 2 === 0) {
  //     currentPlayer = "Player1";
  //     $('.br').text('o');
  //     gameBoardArray[2][2] = 'o';
  //   }
  //   else {
  //     currentPlayer = "Player2";
  //     $('.br').text('x');
  //     gameBoardArray[2][2] = 'x';
  //   }
  //   count++;
  // }
  // checkforwinner();
});
