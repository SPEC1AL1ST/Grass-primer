var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

//переменная для обновления браузера
var reload = browserSync.reload;

// Connect
gulp.task('connect', ['watch'], function () {

    browserSync.init({
        notify: false,
        port: 9080,
        server: {
            baseDir: [
                './'
            ]
        }
    });
});

// Watch
gulp.task('watch', function(){
    gulp.watch(['*.html']).on('change', reload);
    gulp.watch(['css/*.css']).on('change', reload);
});

//default
gulp.task('default', ['connect']);