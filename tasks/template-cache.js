(() => {
    module.exports = ($) => {
        'use strict'

        const templateCache = (src, dist) =>
            $.gulp
            .src([
                `${src}/js/**/**/*.tpl.html`,
                `${src}/partials/**/**/*.html`,
            ])
            .pipe($.templateCache('templates.js', {
                standalone: true
            }))
            .pipe($.gulp.dest(dist))

        $.gulp.task('template-cache', () => templateCache(`${$.deploy.dir}`, `${$.deploy.dir}/js`))

        $.gulp.task('template-cache-dist', () => templateCache(`${$.dist.dir}`,`${$.dist.dir}/js`))
    }
})()