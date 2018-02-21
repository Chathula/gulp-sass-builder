'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
let cleanCSS = require('gulp-clean-css');

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
 return gulp.src('./sass/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});

gulp.task('bundle', function () {
  return gulp.src('css/**/*.css')
    .pipe(concatCss("bundle.min.css"))
    .pipe(gulp.dest('build/'));
});

gulp.task('minify-css', () => {
  return gulp.src('build/bundle.min.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series('sass', 'bundle', 'minify-css'));
