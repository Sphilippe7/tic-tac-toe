// 'use strict';
//
// const store = require('../store.js');
// const config = require('../config.js');
// // const api = require('../config');
//
// // const newgame = () =>
// // $.ajax({
// //   url: api.host + '/games',
// //   method: 'POST',
// //   headers: {
// //     Authorization: 'Token token=' + api.user.token,
// //   },
// // });
// //
// // const updategame = (data) =>
// // $.ajax({
// //   url: api.host + '/games/' + api.game.id,
// //   method: 'PATCH',
// //   headers: {
// //     Authorization: 'Token token=' + api.user.token,
// //   },
// //   data
// // });
//
// const newgame = () =>
// $.ajax({
//   url: config.host + '/games',
//   method: 'POST',
//   headers: {
//     Authorization: 'Token token=' + store.user.token,
//   },
// });
//
// const updategame = (data) =>
// $.ajax({
//   url: config.host + '/games/' + store.game.id,
//   method: 'PATCH',
//   headers: {
//     Authorization: 'Token token=' + store.user.token,
//   },
//   data
// });
//
// module.exports = {
// newgame,
// updategame
// };
