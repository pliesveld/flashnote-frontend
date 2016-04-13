var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('bootstrap-copy', function() {
    var boot_base = 'app/bower_components/bootstrap/dist/';

    gulp.src(boot_base + 'css/{bootstrap.css,bootstrap.css.map,bootstrap-theme.css,bootstrap-theme.css.map}')
        .pipe(gulp.dest('app/vendor/css/'));

    gulp.src(boot_base + 'fonts/*')
        .pipe(gulp.dest('app/fonts/'));

});

gulp.task('angular-concat', function() {
    var bower_base = 'app/bower_components/';

    var vendor_ang = [];


    vendor_ang.push(bower_base + 'jquery/dist/jquery.js');
    vendor_ang.push(bower_base + 'angular/angular.js');
    vendor_ang.push(bower_base + 'angular-cookies/angular-cookies.js');
    vendor_ang.push(bower_base + 'angular-resource/angular-resource.js');
    vendor_ang.push(bower_base + 'angular-ui-router/release/angular.ui.router.js');
    vendor_ang.push(bower_base + 'bootstrap/dist/js/bootstrap.js');

    gulp.src(vendor_ang)
        .pipe(sourcemaps.init())
        .pipe(concat('angular-bootstrap.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/vendor/js'));
});


gulp.task('default', function() {
    console.log(this);
});
