'use strict';

const api = require('../auth/api');

let currentPlayer;
let count = 1;


//Game Board Positioning
let gameBoardArray = [["box", "box", "box"],["box", "box", "box"],["box", "box", "box"]];
const disableGame = function() {
  $(".tl").off('click');
  $(".tm").off('click');
  $(".tr").off('click');
  $(".ml").off('click');
  $(".mm").off('click');
  $(".mr").off('click');
  $(".bl").off('click');
  $(".bm").off('click');
  $(".br").off('click');
};


//Winning the game
let checkforwinner = function() {
  console.log(gameBoardArray);
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
    disableGame();
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
    console.log('O wins');
  $('.display-winner').text('Player 2 Wins!');
  disableGame();
  }

//if 9 turns have passed and there is no winner then its a tie!
if(count === 9) {
  $('.display-winner').text('Its a Tie!');
  disableGame();
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
    col = 1;
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



const enableGame = function(){
  console.log('enabling game');
  $(".tl").on('click', function(){
    recordMove('.tl');
  });

  $(".tm").on('click', function(){
    recordMove('.tm');

  });

  $(".tr").on('click', function(){
    recordMove('.tr');

  });

  $(".ml").on('click', function(){
    recordMove('.ml');

  });

  $(".mm").on('click', function(){
    recordMove('.mm');

  });

  $(".mr").on('click', function(){
    recordMove('.mr');

  });

  $(".bl").on('click', function(){
    recordMove('.bl');

  });

  $(".bm").on('click', function(){
    recordMove('.bm');

  });

  $(".br").on('click', function(){
    recordMove('.br');

  });
};

const reset = function(){
    $('.box').off('click');
    $('.box').html('');
    recordMove.turn = "x";
    gameBoardArray[0][0] = 'box';
    gameBoardArray[0][1] = 'box';
    gameBoardArray[0][2] = 'box';
    gameBoardArray[1][0] = 'box';
    gameBoardArray[1][1] = 'box';
    gameBoardArray[1][2] = 'box';
    gameBoardArray[2][0] = 'box';
    gameBoardArray[2][1] = 'box';
    gameBoardArray[2][2] = 'box';
    $('.display-winner').text('');
    count = 1;
    enableGame();
};


module.exports = {
  checkforwinner,
  enableGame,
  disableGame,
  reset
};
