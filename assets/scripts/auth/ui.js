'use strict';

const api = require('../config');


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

const signOutSuccess = data => {
api.user = data.user;
  success(data);
  console.log(data);
};

const changePasswordSuccess = data => {
api.user = data.user;
  success(data);
  console.log(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

const creategameSuccess = data => {
  api.game = data.game;
  success(data);
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
};
