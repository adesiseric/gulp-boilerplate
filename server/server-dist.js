(() => {
    module.exports = ($) => {
        'use strict'

        const app = $.express()

        const PORT = 9000

        // ROUTES
        app
        .use($.express.static($.dist.dir))
        .use('/*', (req, res) => res.sendFile($.path.resolve(__dirname, `../${$.dist.dir}`)))
        .listen(PORT, () => console.log('Listening on port %d', PORT))

        // LAUNCH
        $.open(`http://localhost:${PORT}`)
    }
})()