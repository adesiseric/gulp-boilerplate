(() => {
    module.exports = ($) => {
        'use strict'

        const webserver = (server) =>
            require(`../${$.server}/${server}`)($)

        $.gulp.task('webserver', () => webserver('server'))

        $.gulp.task('webserver-dist', () => webserver('server-dist'))
    }
})()