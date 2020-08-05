const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const path = {
    sassFile: 'assets/sass/styles.scss',
    cssFiles: 'assets/css'
}

gulp.task('sass', async function () {
    gulp.src('assets/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.cssFiles))
})

gulp.task('watch', async function () {
    gulp.watch('assets/sass/*.scss', gulp.series('sass'));
})