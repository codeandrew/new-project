var gulp = require('gulp'),
less = require('gulp-less'),
cssmin = require('gulp-clean-css'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
minify = require('gulp-minify'),
concat = require('gulp-concat');

gulp.task('script', function() {
  return gulp.src('asset/scripts/*.js')
      .pipe(concat('script'))
      //.pipe(uglify())
      .pipe(rename({
          extname: ".min.js"
      }))
      .pipe(gulp.dest('asset/scripts'))
});

gulp.task('less', function() {
  return gulp.src('assets/less/*.less')
      .pipe(less())
      .pipe(gulp.dest('assets/styles')) // create a css file
      .pipe(cssmin())
      .pipe(rename({ // add .min of the minified
        suffix: '.min'
      }))
      .pipe(gulp.dest('assets/styles')); // destination
});

gulp.task('watch', function () { // auto gulp
    gulp.watch('assets/less/*.less', ['less']);
  //gulp.watch('asset/scripts/*.js', ['scripts']);   
});

gulp.task('default', ['less','script','watch']);