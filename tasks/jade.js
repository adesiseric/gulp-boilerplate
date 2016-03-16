(() => {
    module.exports = ($) => {
        'use strict'

        const jade = (dest) =>
            $.gulp
            .src([
                `${$.dev.dir}/**/*.jade`,
                `!${$.dev.dir}/**/_*.jade`,
                `!${$.dev.dir}/**/_**/**/*.jade`,
            ])
            .pipe($.jade({
                pretty: true
            }))
            .on('error', (error) => console.log(error))
            .pipe($.gulp.dest(dest))

        $.gulp.task('jade', () => jade($.deploy.dir))

        $.gulp.task('jade-dist', () => jade($.dist.dir))
    }
})()