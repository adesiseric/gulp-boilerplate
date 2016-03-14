(() => {
    module.exports = ($) => {
        'use strict'

        const app = $.express()

        const PORT = 3000
        const PORT_RELOAD = 35729

        // ROUTES
        app
        .use($.connect({port: PORT_RELOAD}))
        .use($.express.static($.deploy.dir))
        .use('/*', (req, res) => res.sendFile($.path.resolve(__dirname, `../${$.deploy.dir}`)))
        .listen(PORT, () => console.log('Listening on port %d', PORT))

        // LIVERELOAD
        $.tinylr.listen(PORT_RELOAD, () => console.log('Listening on port %d', PORT_RELOAD))

        // LAUNCH
        $.open(`http://localhost:${PORT}`)
    }
})()