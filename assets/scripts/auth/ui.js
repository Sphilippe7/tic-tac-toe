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

const resetgameSuccess = data => {
  api.game = data.game;
  success(data);
  logic.reset();
  console.log(data);
};



module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  creategameSuccess,
  resetgameSuccess,
};
