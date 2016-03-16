(() => {
    module.exports = ($) => {
        'use strict'

        const style = (dest) =>
            $.gulp
            .src(`${$.dev.styles}/main.styl`)
            .pipe($.stylus())
            .pipe($.gulp.dest(dest))

        $.gulp.task('styles', () =>
            style($.deploy.styles)
        )

        $.gulp.task('styles-dist', () =>
            style($.dist.styles)
        )
    }
})()