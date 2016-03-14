(() => {
    module.exports = ($) => {
        'use strict'

        const copy = (src, dest) =>
            () =>
                $.gulp.src(src)
                .pipe($.gulp.dest(dest))

        $.gulp.task('copy-vendor', copy(`${$.dev.vendor}/**/*`, $.deploy.vendor))

        $.gulp.task('copy', (cb) => $.runSequence(['copy-vendor'], cb))
    }
})()