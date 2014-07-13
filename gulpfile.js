// Include gulp
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

// Uglify js
gulp.task('scripts', function() {
    return gulp.src('src/*.js')
        .pipe(concat('portfolio.jquery.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Minify css
gulp.task('styles', function() {
    return gulp.src('src/*.css')
        .pipe(concat('portfolio.jquery.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'));
});

// Default Task
gulp.task('default',
    [
        'scripts',
        'styles',
    ]);
