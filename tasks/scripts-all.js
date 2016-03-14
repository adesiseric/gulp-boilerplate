(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('scriptsAll', () =>
            $.gulp
            .src($.deploy.index)
            .pipe($.useref())
            .pipe($.gulp.dest($.deploy.dir))
        )
    }
})()