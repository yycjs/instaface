const feathers = require('feathers');
const socketio = require('feathers-socketio');
const memory = require('feathers-memory');
const path = require('path');

feathers().configure(socketio(function(io) {
    // var app = this;

    // io.set('authorization', function (handshake, callback) {
    //   app.lookup('users').create({
    //     username: handshake.query.username
    //   }, {}, callback);
    // });
  }))
  .use(feathers.static(path.join(__dirname, '..', 'public')))
  .use('/users', memory())
  .use('/images', memory())
  .listen(1337);