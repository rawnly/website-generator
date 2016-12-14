var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var chalk = require('chalk');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {

  // File watching
  console.log(chalk.green.inverse(' Watching ') + chalk.inverse.bold(' for ') + chalk.inverse.red('changes...'));

  // Watch files and call the task
  gulp.watch('./coffee/**/*.coffee', ['coffee']);
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./dist/**/**', ['reload']);

  // More Specific
  // gulp.watch('./dist/**/*.html', ['reload']);
  // gulp.watch('./dist/js/**/*.js', ['reload']);

  // BrowserSync init :)
  browserSync.init({
      server: {
          baseDir: "./dist/",
          proxy: 'mylocal.dev'
      }
  });
});

// Convert CoffeeScript to JavaScript
gulp.task('coffee', function() {
  gulp.src('./coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./dist/js/'));
    browserSync.reload()
    console.log( chalk.yellow.inverse.bold('Coffescript ') + chalk.inverse('updated') );
});

// Convert SASS to CSS
gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
    browserSync.reload()
    console.log( chalk.yellow.inverse.bold('Sass ') + chalk.inverse('updated') );
});

// Reload the webpage
gulp.task('reload', function() {
  browserSync.reload();
});
