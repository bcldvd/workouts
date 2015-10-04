'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');


gulp.task('gh-pages', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('deploy', ['build', 'gh-pages']);
