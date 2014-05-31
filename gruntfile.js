module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            travis: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },
        protractor: {
            options: {
                configFile: "node_modules/protractor/referenceConf.js",
                keepAlive: true,
                noColor: false
            },
            e2e: {
                options: {
                    configFile: "test/protractor.conf.js"
                }
            }
        },
        uglify: {
            build: {
                src: ['src/**/*.js', 'src/*.js', '!src/libraries/**/*.js'],
                dest: 'dist/assets/app.min.js'
            }
        },
        concat: {
            dist: {
                src: ['dist/assets/app.min.js'],
                dest: 'dist/assets/app.min.js',
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' +
                            ';(function( window, undefined ){ \n "use strict";',
                    footer: "}( window ));"
                }
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: {
                    'dist/assets/app.min.css': ['src/assets/**/*.css']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['data/**'], dest: 'dist/'},
                    {expand: true, cwd: 'src/', src: ['libraries/**'], dest: 'dist/'},
                    {expand: true, cwd: 'src/', src: ['views/**'], dest: 'dist/'},
                    {expand: true, cwd: 'src/', src: ['assets/img/**'], dest: 'dist/'}
                ]
            }
        },
        watch: {
            files: ['src/**/*.js', 'src/*.js'],
            tasks: ['uglify']
        }
    });

    // Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-selenium-webdriver-phantom');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat', 'cssmin', 'copy', 'karma:travis', 'protractor']);
    grunt.registerTask('watch', ['uglify', 'concat', 'cssmin', 'copy', 'watch']);
    grunt.registerTask('test', ['karma:travis', 'protractor']);

};