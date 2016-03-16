(() => {
    module.exports = ($) => {
        'use strict'

        const clean = (dest, cb) =>
            $.del([dest], {
                force: true
            }, cb)

        $.gulp.task('clean', (cb) => clean($.deploy.dir, cb))

        $.gulp.task('clean-dist', (cb) => clean($.dist.dir, cb))
    }
})()