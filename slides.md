title: Building InstaFace
output: index.html
theme: theme
controls: false
logo: theme/logo.png

-- presenter

![David Luecke](http://gravatar.com/avatar/a14850281f19396480bdba4aab2d52ef?s=200)

## David Luecke

* [<i class="fa fa-github"></i> daffl](https://github.com/daffl)
* [<i class="fa fa-twitter"></i> @daffl](http://twitter.com/daffl)
* [<i class="fa fa-home"></i> Bitovi](http://bitovi.com)

--

<img src="img/calgary.jpg" style="width: 90%; margin: 0 auto; display: block;" alt="Calgary" />

--

# InstaFace

## Building a real-time photo sharing application

--

<blockquote class="twitter-tweet" lang="en"><p>“You mean I can type, and it updates that text…IN REALTIME??” - every JavaScript framework demo.</p>&mdash; I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/statuses/464154382884700160">May 7, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

--

# [FeathersJS](http://feathersjs.com)

A NodeJS library based on Express for creating RESTful and websocket based APIs:

  ```javascript
  var feathers = require('feathers');

  var todoService = {
    get: function(id, params, callback) {
      callback(null, {
        id: id,
        description: 'You have to do ' + id + '!'
      });
    }
  };

  feathers().configure(feathers.socketio())
      .use('/todos', todoService)
      .listen(8000);
  ```

--

# Connecting to services

REST

```bash
GET todos/dishes
{
  "id": "dishes",
  "description": "You have to do dishes!"
}
```

SocketIO

```javascript
<script src="http://localhost:8000/socket.io/socket.io.js" />
<script type="text/javascript">
  var socket = io.connect('http://localhost:8000/');

  socket.emit('todos::get', 'laundry', {}, function(error, todo) {
    todo.id // -> "laundry"
    todo.description // "You have to do laundry!"
  });
</script>
```

--

# A Feathers service

Can be any JavaScript object that provides one or more of the following methods:

```javascript
var myService = {
  find: function(params, callback) {},

  get: function(id, params, callback) {},

  create: function(data, params, callback) {},

  update: function(id, data, params, callback) {},

  patch: function(id, data, params, callback) {},

  remove: function(id, params, callback) {},

  setup: function(app) {}
}
```

--

# HTML 5 video

```javascript
var video = document.getElementsByTagName('video')[0];
var connect = function (stream) {
  video.src = window.URL ? window.URL.createObjectURL(stream) : stream;
  video.play();
};
var error = function (e) {
  alert(e.message);
};

navigator.getMedia = (navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia);
navigator.getMedia({ video: true }, connect, error);
```

--

# Taking a picture

```javascript
var video = document.getElementsByTagName('video')[0];
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = options.width || video.videoWidth;
canvas.height = options.height || video.videoHeight;
ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

canvas.toDataURL() // Base 64 encoded image
```

