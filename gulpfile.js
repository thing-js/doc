'use strict';

var exec = require('child_process').execSync;
var gulp = require('gulp');

gulp.task('publish', function() {
  exec('git checkout master');
  exec('git add .');
  exec('git commit -m "Publish"');
  exec('git push origin master');
  exec('git branch -D gh-pages');
  exec('git branch gh-pages');
  exec('git push origin gh-pages');
});

gulp.task('default', ['publish']);
