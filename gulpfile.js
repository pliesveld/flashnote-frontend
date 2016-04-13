var gulp = require('gulp');



gulp.task('bootstrap-copy', function() {
    var boot_base = 'app/bower_components/bootstrap/dist/';

    gulp.src(boot_base + 'css/{*.css,*.css.map}')
        .pipe(gulp.dest('app/css/'));

    gulp.src(boot_base + 'fonts/*')
        .pipe(gulp.dest('app/fonts/'));

    gulp.src(boot_base + 'js/*')
        .pipe(gulp.dest('app/js/vendor/'));


});

gulp.task('default', function() {
    console.log("hello world");
});
