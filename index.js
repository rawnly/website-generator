#!/usr/bin/env node
// 'use strict';

const fs = require('fs');
const program = require('commander');
const chalk = require('chalk');
const pkg = require('./package.json');
const colors = require('colors');
const clear = require('clear');

clear();

var html_PATH = __dirname + '/templates/dist/index.html';
var css_PATH = __dirname + '/templates/dist/css/style.css';
var js_PATH = __dirname + '/templates/dist/js/index.js';
var sass_PATH = __dirname + '/templates/sass/style.scss';
var coffee_PATH = __dirname + '/templates/coffee/index.coffee';
var pkg_PATH = __dirname + '/templates/package.json';
var gulp_PATH = __dirname + '/templates/Gulpfile.js';

console.log('Website Generator'.rainbow.bold);
console.log('');



program
  .version(pkg.title + ' ' + pkg.version);
program.parse(process.argv);


  fs.mkdir('coffee', function(err) {
    if ( err ) {
      console.log('./coffee/' + ' EXISTS!'.red);
    };
  });
  fs.mkdir('sass', function(err) {
    if ( err ) {
      console.log('./sass/' + ' EXISTS!'.red);
    };
  });
  fs.mkdir('dist', function(err) {
    if ( err ) {
      console.log('./dist/' + ' EXISTS!'.red);
    };
  });
  fs.mkdir('dist/css', function(err) {
    if ( err ) {
      console.log('dist/css/' + ' EXISTS!'.red);
    };
  });
  fs.mkdir('dist/css/res', function(err) {
    if ( err ) {
      console.log('dist/css/res/' + ' EXISTS!'.red);
    };
  });
  fs.mkdir('dist/js', function(err) {
    if ( err ) {
      console.log('dist/js/' + ' EXISTS!'.red);
    };
  });

  // INDEX.HTML
  fs.readFile(html_PATH, function read(err, data) {
      if (err) { throw err; }
      // Write the file
      _write(data, './dist/index.html');
  });
  //STYLE.CSS
  fs.readFile(css_PATH, function read(err, data) {
      if (err) { throw err; }
      // Write the file
      _write(data, './dist/css/style.css');
  });
  //JS
  fs.readFile(js_PATH, function read(err, data) {
      if (err) { throw err; }
      // Write the file
      _write(data, './dist/js/index.js');
  });

  //SASS
  fs.readFile(sass_PATH, function read(err, data) {
      if (err) { throw err; }
      // Write the file
      _write(data, './sass/style.scss');
  });

  // COFFEE
  fs.readFile(coffee_PATH, function read(err, data) {
      if (err) { throw err; }
      // Write the file
      _write(data, './coffee/index.coffee');
  });

  // PACKAGE.JSON
  fs.readFile(pkg_PATH, function read(err, data) {
      if (err) { throw err; }
      // Write the file
      _write(data, './package.json');
  });

  // GULPFILE
  fs.readFile(gulp_PATH, function read(err, data) {
      if (err) { throw err; }
      // Write the file
      _write(data, './Gulpfile.js');
  });



function _write(file_data, filename) {
  fs.writeFile(filename, file_data, function (err, data) {
    if ( err ) {
      throw err;
    }
  })
}
