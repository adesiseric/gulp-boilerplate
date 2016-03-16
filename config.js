(() => {
    'use strict'

    const $ = {
        babel: require('gulp-babel'),
        connect: require('connect-livereload'),
        del: require('del'),
        express: require('express'),
        fs: require('fs'),
        gulp: require('gulp'),
        gulpif: require('gulp-if'),
        htmlMin: require('gulp-htmlmin'),
        jade: require('gulp-jade'),
        ngAnnotate: require('gulp-ng-annotate'),
        open: require('open'),
        path:require('path'),
        runSequence: require('run-sequence'),
        tinylr: require('tiny-lr')(),
        uglify: require('gulp-uglify'),
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
        },

        dist: {
            dir: './_dist',
            index: './_dist/index.html',
            vendor: './_dist/vendor'
        }
    }

    $.fn = {
        readFolder(folder) {
            const PATH = $.path.join(__dirname, folder)

            const FILES = $.fs.readdirSync(PATH)

            FILES.forEach((file) => {
                require(`${$.tasks}/${file}`)($)
            })
        }
    }

    module.exports = $
})()