(() => {
    module.exports = ($) => {
        'use strict'

        const templateCache = (dist) =>
            $.gulp
            .src([
                `${$.deploy.dir}/js/**/**/*.tpl.html`,
                `${$.deploy.dir}/partials/**/**/*.html`,
            ])
            .pipe($.templateCache('templates.js', {
                standalone: true
            }))
            .pipe($.gulp.dest(dist))

        $.gulp.task('template-cache', () =>
            templateCache(`${$.deploy.dir}/js`)
        )

        $.gulp.task('template-cache-dist', () =>
            templateCache(`${$.dist.dir}/js`)
        )
    }
})()