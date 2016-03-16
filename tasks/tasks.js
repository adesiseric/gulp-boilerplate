(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('run', (cb) => $.runSequence('compiledBase', 'webserver', cb))

        $.gulp.task('dist', (cb) => $.runSequence('compiledMin', 'scriptsAll', 'html-min', 'clear-dist', 'webserver-dist', cb))
    }
})()