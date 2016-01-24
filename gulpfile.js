var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify({debug: true})
        .transform(babelify, {presets: ['es2015', 'react']})
        .require('./js/app.js', {entry: true})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
    gulp.watch('**/*.js', ['browserify']);
});

gulp.task('default', ['browserify']);
