var gulp = require('gulp'),
  watchLess = require('gulp-watch-less'),
  less = require('gulp-less'),
  concat = require('gulp-concat');
/* dialing with styles */
gulp.task('styles', function () {
  gulp.src('less/**/*.less')
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('css'));
});
gulp.task('watch-styles', function () {
  gulp.watch('less/**/*.less', ['styles']);
});
