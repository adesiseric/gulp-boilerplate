(() => {
    module.exports = ($) => {
        'use strict'

        const scripts = (dest) =>
            $.gulp
            .src([
                `${$.dev.dir}/**/*.js`,
                `!${$.dev.dir}/**/_*.js`,
                `!${$.dev.dir}/**/_**/**/*.js`
            ])
            .pipe($.babel({
                presets: ['es2015']
            }))
            .pipe($.wrap(
                `(function () {\n
                    <%= contents %>\n
                })();`
            ))
            .pipe($.ngAnnotate())
            .pipe($.gulp.dest(dest))

        $.gulp.task('scripts', () => scripts($.deploy.dir))

        $.gulp.task('scripts-dist', () => scripts($.dist.dir))
    }
})()