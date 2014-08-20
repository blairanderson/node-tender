/**
 * Created by blairanderson on 8/19/14.
 */


/**
 * browserify
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function (grunt) {

  grunt.config.set('watchify', {
    dev: {
      src: ['app/client/**/*.js'],
      dest: 'assets/js/app.js'
    },
    build: {
      src: ['client/**/*.js'],
      dest: 'assets/js/app.js'
    }
  });

  grunt.loadNpmTasks('grunt-watchify');
};
