// http://coderthoughts.blogspot.co.uk/2013/03/html5-video-fun.html - thanks :)
// view-source:http://demo.creative-jar.com/html5-camera/
$(document).ready(function () {
  $('form.login').on('submit', function (ev) {
    ev.preventDefault();
  });

  $('button.close').click(function () {
    $('.camera-modal').addClass('hidden');
  });

  $('button.camera').click(function () {
    $('.camera-modal').removeClass('hidden');
  });

  $('.take-photo').on('click', function () {
  });
});
