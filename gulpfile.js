(function() {

  'use strict';

  const gulp = require('gulp');
  const fs = require('fs');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //import
  fs.readdirSync('./build').map(function(file) {
    require('./build/' + file);
  });

}());
