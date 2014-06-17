(function ($) {
  // http://coderthoughts.blogspot.co.uk/2013/03/html5-video-fun.html - thanks :)
  // view-source:http://demo.creative-jar.com/html5-camera/
  $.fn.video = function () {
    this.each(function () {
      var video = this;
      if (!$(video).data('video-initialized')) {
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

        $(video).data('video-initialized', true);
      }
    });

    return this;
  };

  $.fn.snapshot = function (options) {
    this.each(function () {
      var video = this;
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');

      canvas.width = options.width || video.videoWidth;
      canvas.height = options.height || video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      if (options.success) {
        options.success(canvas.toDataURL());
      } else if(options) {
        options(canvas.toDataURL());
      }
    });

    return this;
  }
})(jQuery);
