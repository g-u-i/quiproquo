var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
// var serverConfig = require('./serverConfig.json')
var browserSync = require('browser-sync').create();
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
  return gulp.src('./assets/less/screen.less')
    .pipe(plumber({
        errorHandler: function (err) {
          console.log(err.Error);
          this.emit('end');
        }
    }))
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './bower_components/lodash/lodash.js',
    './bower_components/handlebars/handlebars.js',
    './bower_components/tabletop/src/tabletop.js'
    ],
    {base: 'bower_components/'}
  )
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./assets/js/'));
});

gulp.task('templates', function(){
  gulp.src('./templates/*.hbs')
    .pipe(plumber({
        errorHandler: function (err) {
          console.log(err.name, ": ", err.message, "\nin `", err.fileName, "`");
          this.emit('end');
        }
    }))
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'troc',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('serve', function() {
  browserSync.init({ server: "." });

  gulp.watch('./assets/less/*.less', ['less']);
  gulp.watch('./templates/*.hbs', ['templates']);

  gulp.watch("./templates/*.hbs").on('change', browserSync.reload);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('watch', function() {
  gulp.watch('./assets/less/*.less', ['less']);
  gulp.watch('./templates/*.hbs', ['templates']);
});

gulp.task('build',['less', 'js', 'templates']);
gulp.task('default', ['build', 'watch']);
