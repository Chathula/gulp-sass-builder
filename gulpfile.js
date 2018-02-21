'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream')
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
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('build/'));
});

gulp.task('minify-css', () => {
  return gulp.src('build/bundle.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series('sass', 'bundle', 'minify-css'));

gulp.task('sass:watch', function () {
 gulp.watch('./sass/**/*.scss', ['sass']);
});