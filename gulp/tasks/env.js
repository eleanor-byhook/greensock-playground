'use strict';

var config = require('../config');
var browser = require('../browser');

var gulp = require('gulp');
var gutil = require('gulp-util');
//var rename = require('gulp-rename');

var src = config.production ? config.env.prod : config.env.dev;

gulp.task('do-env', gulp.parallel(function() {

  return gulp.src(src)
    //.pipe(rename(config.env.name))
    .pipe(gulp.dest(config.env.dist))
    .pipe(browser.reload({stream: true}));

}));


// watch tasks

gulp.task('reload-env', gulp.parallel('do-env', function () {

  gutil.log(gutil.colors.yellow('Reloading env...'));

}));


// main task

gulp.task('env', gulp.parallel('do-env', function () {

  if (config.watch) {
    gulp.watch(src, gulp.series('reload-env'));
  }

}));
