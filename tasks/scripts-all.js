(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('scriptsAll', () =>
            $.gulp
            .src($.dist.index)
            .pipe($.useref())
            .pipe($.gulpif('*.js', $.uglify()))
            .pipe($.gulp.dest($.dist.dir))
        )
    }
})()