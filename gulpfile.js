/* jshint node: true */
'use strict';

var gulp = require('gulp'),
    g = require('gulp-load-plugins')({lazy: false}),
    noop = g.util.noop,
    bower = require('./bower'),
    isWatching = false;

var exportPath = './resources/web';

/**
 * Vendors
 */
gulp.task('vendors', ['vendors-css', 'vendors-js']);
gulp.task('default', ['vendors']);

/**
 * Reveal
 */
gulp.task('reveal', function () {
  return gulp.src('bower_components/reveal.js/**/**')
    .pipe(gulp.dest( exportPath + '/reveal.js'));
});


/**
 * Vendors
 */
gulp.task('vendors-css', function () {
  return g.bowerFiles()
    .pipe(g.filter('**/*.css'))
    .pipe(g.concat('vendors.css'))
    .pipe(gulp.dest( exportPath + '/css'))
    .pipe(g.minifyCss())
    .pipe(g.rename('vendors.min.css'))
    .pipe(gulp.dest( exportPath + '/css'));
});
/**
 * Vendors
 */
gulp.task('vendors-js', function () {
  return g.bowerFiles()
    .pipe(g.filter('**/*.js'))
    .pipe(g.concat('vendors.js'))
    .pipe(gulp.dest( exportPath + '/js'))
    .pipe(g.uglify())
    .pipe(g.rename('vendors.min.js'))
    .pipe(gulp.dest( exportPath + '/js'));
});
