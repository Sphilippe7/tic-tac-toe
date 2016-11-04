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

module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
