var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var replace = require('gulp-replace');
var clean = require('gulp-clean');
var debug = require('gulp-debug');


gulp.task('bootstrap-copy', function() {
  var boot_base = 'app/bower_components/bootstrap/dist/';

  gulp.src(boot_base + 'css/{bootstrap.css,bootstrap.css.map,bootstrap-theme.css,bootstrap-theme.css.map}')
    .pipe(gulp.dest('app/vendor/css/'));

  gulp.src(boot_base + 'fonts/*')
    .pipe(gulp.dest('app/vendor/fonts/'));
});

gulp.task('vendor-concat', function() {
  var bower_base = 'app/bower_components/';
  var other_base = 'app/external/js/';

  var vendor_ang = [];

  vendor_ang.push(bower_base + 'jquery/dist/jquery.js');
  vendor_ang.push(other_base + 'highlight.min.js');
  vendor_ang.push(bower_base + 'angular/angular.js');
  vendor_ang.push(bower_base + 'angular-cookies/angular-cookies.js');
  vendor_ang.push(bower_base + 'angular-resource/angular-resource.js');
  vendor_ang.push(bower_base + 'angular-ui-router/release/angular-ui-router.js');
  vendor_ang.push(bower_base + 'angular-highlightjs/angular-highlightjs.js');
  vendor_ang.push(bower_base + 'angular-audio/app/angular.audio.js');
  vendor_ang.push(bower_base + 'bootstrap/dist/js/bootstrap.js');
  vendor_ang.push(bower_base + 'holderjs/holder.js');
  vendor_ang.push(bower_base + 'angular-holderjs/src/holder.js');


  console.log(vendor_ang);

  return gulp.src(vendor_ang)
    .pipe(concat('angular-bootstrap.js'))
    .pipe(gulp.dest('app/vendor/js'));
});

gulp.task('vendor-dev', ['bootstrap-copy', 'vendor-concat'], function() {});


gulp.task('sass', function() {
  return gulp.src(['app/scss/**/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
    },
    port: 8000,
  });
});

gulp.task('watch', ['browserSync', 'sass', 'js'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);

  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/frontend.js', browserSync.reload);

  gulp.watch('app/app.js', ['js']);
  gulp.watch('app/components/**/*.js', ['js']);
  gulp.watch('app/main/**/*.js', ['js']);

});

gulp.task('js', function() {
  gulp.src([
    'app/components/**/*.module.js', 
    'app/main/**/*.module.js', 
    'app/app.js',
    'app/components/**/*.js', 
    'app/main/**/*.js'])
  .pipe(debug())
  .pipe(replace(/##API_ENDPOINT##/, 'localhost:9000'))
  .pipe(concat('frontend.js'))
  .pipe(gulp.dest('app/js'));
});



gulp.task('vendor-copy-src', function() {
  return gulp.src('app/vendor/**/*').pipe(gulp.dest('build'));
});

gulp.task('src-vendor-copy', function() {
  gulp.src(['app/vendor/**/*.js'])
  .pipe(debug())
  .pipe(gulp.dest('build/js'));
});

gulp.task('src-html-copy', function() {
  gulp.src(['app/**/*.html'])
  .pipe(debug())
  .pipe(gulp.dest('build'));
});

gulp.task('src-css-copy', function() {
  gulp.src(['app/css/**/*.css'])
  .pipe(debug())
  .pipe(gulp.dest('build/css'));
});


gulp.task('default', function() {
    console.log(this);
});
