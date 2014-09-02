module.exports = function (grunt) {
  grunt.registerTask('compileAssets', [
    'clean:dev',
    'jst:dev',
    'handlebars',
    'less:dev',
    'copy:dev',
    'coffee:dev'
  ]);
};
