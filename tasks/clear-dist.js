(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('clear-dist', (cb) =>
            $.del([
                `${$.dist.dir}/**/*.js`,
                `!${$.dist.dir}/js/all.js`,
                $.dist.vendor
            ], {
                force: true
            }, cb)
        )
    }
})()