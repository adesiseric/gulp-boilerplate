(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('html-min', () =>
            $.gulp
            .src($.dist.index)
            .pipe($.htmlMin({
                collapseWhitespace: true
            }))
            .pipe($.gulp.dest($.dist.dir))
        )
    }
})()