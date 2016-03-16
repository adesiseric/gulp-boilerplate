(() => {
    module.exports = ($) => {
        'use strict'

        $.gulp.task('webserver-dist', () => require(`../${$.server}/server-dist.js`)($))
    }
})()