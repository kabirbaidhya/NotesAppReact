(function() {
    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var babelify = require('babelify');
    var notify = require('gulp-notify');
    var browserify = require('browserify');
    var source = require('vinyl-source-stream');

    gulp.task('browserify', function() {
        return browserify({debug: true})
            .transform(babelify, {presets: ['es2015', 'react']})
            .require('./assets/js/app.js', {entry: true})
            .bundle()
            .pipe(source('app.js'))
            .pipe(gulp.dest('./build/js'))
            .pipe(notify({
                message: 'Javascript Compiled',
                onLast: true
            }));
    });

    gulp.task('sass', function () {
        gulp.src('./assets/scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('build/css'))
            .pipe(notify({
                message: 'Scss compiled',
                onLast: true
            }));
    });

    gulp.task('watch', function() {
        gulp.watch('./assets/js/**/*.js', ['browserify']);
        gulp.watch('./assets/scss/**/*.scss', ['sass']);
    });

    gulp.task('default', ['browserify', 'sass']);

})();
