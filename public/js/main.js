// http://coderthoughts.blogspot.co.uk/2013/03/html5-video-fun.html - thanks :)
// view-source:http://demo.creative-jar.com/html5-camera/
$(document).ready(function () {
  var socket;
  var username;

  $('form.login').on('submit', function (ev) {
    username = $('#username').val();

    socket = io.connect('http://localhost:1337');

    socket.on('images created', function (image) {
      var alt = image.user + ' ' + new Date(image.time).toLocaleDateString();
      $('.photos .row').append('<div class="col-3 mobile-full tablet-col-1-2 left">' +
        '<img src="' + image.data + '" alt="' + alt + '">' +
        '<h3 class="center-text">' + image.user + '</h3>' +
        '<h5 class="center-text">' + image.time + '</h5>' +
      '</div>');
    });

    $('.user-modal').addClass('hidden');
    ev.preventDefault();
  });

  $('button.close').click(function () {
    $('.camera-modal').addClass('hidden');
  });

  $('button.camera').click(function () {
    $('.camera-modal').removeClass('hidden');
    $('#video').video();
  });

  $('.take-photo').on('click', function () {
    $('#video').snapshot({
      success: function (data) {
        socket.emit('images::create', {
          user: username,
          data: data,
          time: new Date()
        }, {}, function () {
          $('.camera-modal').addClass('hidden');
        });
      }
    });
  });
});
