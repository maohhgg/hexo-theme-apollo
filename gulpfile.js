var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

// 一次性编译 Sass 
gulp.task('sass', function() {
    return gulp.src('./source/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'));
});
// 实时编译
gulp.task('sass:watch', function () {
    gulp.watch('./source/scss/_partial/*.scss', ['sass']);
    gulp.watch('./source/scss/*.scss', ['sass']);
});