(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('watch', () => {
            $.gulp
            .watch([`${$.dev.dir}/**/*.js`], ['scripts'])

            $.gulp
            .watch([`${$.dev.dir}/**/*.jade`], () => $.runSequence('jade', 'template-cache'))

            $.gulp
            .watch([`${$.dev.dir}/**/*.styl`], ['styles'])
        })

        return $.gulp.watch([`${$.deploy.dir}/**/*`], (event) => {
            const FILE_NAME = $.path.relative(__dirname, event.path)

            $.tinylr.changed({
                body: {
                    files: [FILE_NAME]
                }
            })
        })
    }
})()