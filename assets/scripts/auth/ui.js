'use strict';

const api = require('../config');
const logic = require('../game/logic');


const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};


const signInSuccess = data => {
  api.user = data.user;
  success(data);
  console.log(data);
  $('.signed-out').hide();
  $('.signed-in').show();
};

const signUpSuccess = data => {
  api.user = data.user;
  success(data);
  console.log(data);
};

const signOutSuccess = () => {
api.user = null;
  success(null);
  console.log('signOutSuccess');
  $('.signed-in').hide();
};

const changePasswordSuccess = () => {
  success(null);
  console.log('changePasswordSuccess');
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

const creategameSuccess = data => {
  api.game = data.game;
  success(data);
  logic.enableGame();
  console.log(data);
};

const newgameSuccess = data => {
  api.game = data.game;
  success(data);
  logic.newgame();
  $('.gamecountmessage').text('');
  console.log(data);
};

const gamecountSuccess = (data) => {
  api.game = data.game;
  success(data);
  $('.gamecountmessage').text('You have played ' + data.games.length + ' ' + 'games');
  console.log(data.games.length);
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  creategameSuccess,
  newgameSuccess,
  gamecountSuccess
};
