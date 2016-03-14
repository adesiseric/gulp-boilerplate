(() => {
    'use strict'

    const $ = {
        babel: require('gulp-babel'),
        connect: require('connect-livereload'),
        del: require('del'),
        express: require('express'),
        fs: require('fs'),
        gulp: require('gulp'),
        jade: require('gulp-jade'),
        ngAnnotate: require('gulp-ng-annotate'),
        open: require('open'),
        path:require('path'),
        runSequence: require('run-sequence'),
        tinylr: require('tiny-lr')(),
        useref: require('gulp-useref'),
        wrap: require('gulp-wrap'),

        server: './server',
        tasks: './tasks',

        deploy: {
            dir: './_deploy/public',
            index: './_deploy/public/index.html',
            vendor: './_deploy/public/vendor',
        },

        dev: {
            dir: './public',
            vendor: './public/_vendor'
        }
    }

    $.fn = {
        readFolder(folder) {
            console.log(folder)
            const PATH = $.path.join(__dirname, folder)

            const FILES = $.fs.readdirSync(PATH)

            FILES.forEach((file) => {
                require(`${$.tasks}/${file}`)($)
            })
        }
    }

    module.exports = $
})()