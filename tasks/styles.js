(() => {
    module.exports = ($) => {
        'use strict'

        const style = (dest, compress) =>
            $.gulp
            .src(`${$.dev.styles}/main.styl`)
            .pipe($.stylus({
                compress: (compress) ? true : false
            }))
            .pipe($.gulp.dest(dest))

        $.gulp.task('styles', () => style($.deploy.styles))

        $.gulp.task('styles-dist', () => style($.dist.styles, true))
    }
})()