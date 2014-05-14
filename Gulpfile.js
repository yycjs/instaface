var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var path = require('path');

var paths = {
  scripts: ['public/js/**/*.js'],
  styles: 'public/less/**/*.less'
};

gulp.task('less', function () {
  gulp.src('./public/less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(paths.scripts)
    // .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('public/build/js'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['less']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['less', 'scripts', 'watch']);