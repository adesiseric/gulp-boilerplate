(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('compiledMin', (cb) => $.runSequence('clean-dist', 'scripts-dist', ['jade-dist', 'copy-dist'], cb))
    }
})()