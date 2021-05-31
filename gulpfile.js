var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//tạo một task browser sync -reload trình duyệt
gulp.task('browser-sync',function(){
    browserSync.init({
        server:{
            baseDir: './app'
        }
    });
    gulp.watch('app/*.html').on('change',browserSync.reload);
})


gulp.task('default',gulp.series('browser-sync'));