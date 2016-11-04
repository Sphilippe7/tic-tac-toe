'use strict';

const api = require('../config');


const signUp = (data) =>
  $.ajax({
    url: api.host + 'sign-up',
    method: 'POST',
    data,
  });

  const signIn = (data) =>
    $.ajax({
      url: api.host + 'sign-in',
      method: 'POST',
      data,
    });


const signOut = () =>
$.ajax({
  url: api.host + '/sign-out/' + api.user.id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + api.user.token,
  },
});

const changePassword = () =>
$.ajax({
  url: api.host + '/change-password/' + api.user.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + api.user.token,
  },
});


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
