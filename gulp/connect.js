'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('heroku', function() {
  connect.server({
    root: 'dist',
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});
