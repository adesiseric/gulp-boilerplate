(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('scriptsAll', () =>
            $.gulp
            .src($.dist.index)
            .pipe($.useref())
            .pipe($.gilpif('*.js', $.uglify()))
            .pipe($.gulp.dest($.dist.dir))
        )
    }
})()