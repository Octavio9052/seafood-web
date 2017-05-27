var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

// Copy lib files from /node_modules into /lib
// NOTE: requires `npm install` before running!
gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('lib/bootstrap'))

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('lib/jquery'))

    gulp.src(['node_modules/tether/dist/js/*.js'])
        .pipe(gulp.dest('lib/tether'))
})

// Default task
gulp.task('default', ['copy']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() {
    // Reloads the browser whenever HTML or CSS files change
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
});
