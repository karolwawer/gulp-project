var gulp = require('gulp');
var sass = require('gulp-sass');
var cssbeautify = require('gulp-cssbeautify');

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(cssbeautify({indent_size: 2}))
        .pipe(gulp.dest('app/css'));
});
gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});
