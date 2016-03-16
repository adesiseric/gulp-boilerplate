(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('run', (cb) => $.runSequence('compiledBase', 'template-cache', 'webserver', cb))

        $.gulp.task('dist', (cb) => $.runSequence('compiledMin', 'template-cache-dist', 'scriptsAll', 'html-min', 'clear-dist', 'webserver-dist', cb))
    }
})()