(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('compiledBase', (cb) => $.runSequence('clean', 'scripts', ['jade', 'copy', 'styles'], cb))
    }
})()