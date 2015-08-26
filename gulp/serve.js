'use strict';

var gulp = require('gulp');
var conf = require('./conf');
var connect = require('gulp-connect');

gulp.task('serve', function () {
  connect.server({
    root: conf.paths.src,
    livereload: true
  });
});
