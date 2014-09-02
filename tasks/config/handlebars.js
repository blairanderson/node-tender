/**
 * Created by blairanderson on 8/30/14.
 */

module.exports = function (grunt) {

  grunt.config.set('handlebars', {
    dev: {
      namespace: "JST",
      amd: true,
      commonjs: true,
      files: {
        'client/templates.js': [ './client/templates/**/*.hbs']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');
};






