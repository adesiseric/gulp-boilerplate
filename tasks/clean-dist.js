(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('clean-dist', (cb) =>
            $.del([$.dist.dir], {
                force: true
            }, cb)
        )
    }
})()