(() => {
    module.exports = ($) => {
        'use strict'

        const copy = (src, dest) =>
            () =>
                $.gulp.src(src)
                .pipe($.gulp.dest(dest))

        $.gulp.task('copy-vendor-dist', copy(`${$.dev.vendor}/**/*`, $.dist.vendor))

        $.gulp.task('copy-dist', (cb) => $.runSequence(['copy-vendor-dist'], cb))
    }
})()