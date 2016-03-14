(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('jade', () =>
            $.gulp.src([
                `${$.dev.dir}/**/*.jade`,
                `!${$.dev.dir}/**/_*.jade`,
                `!${$.dev.dir}/**/_**/**/*.jade`,
            ])
            .pipe($.jade({
                pretty: true
            }))
            .on('error', (error) => console.log(error))
            .pipe($.gulp.dest($.deploy.dir))
        )
    }
})()