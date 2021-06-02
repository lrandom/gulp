var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var runSequence = require('gulp4-run-sequence');

//task biên dịch sass
gulp.task('sass',function(){
    return gulp.src('./app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css/'))
    .pipe(browserSync.stream());
})


//tạo một task browser sync -reload trình duyệt
gulp.task('browser-sync',function(){
    browserSync.init({
        server:{
            baseDir: './app'
        }
    });
    gulp.watch('app/scss/*.scss').on('change',gulp.series('sass'));
    gulp.watch('app/**').on('change',browserSync.reload);

})


gulp.task('default',function(callback) {
   runSequence(['sass','browser-sync'],callback);
});