'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    shell: {
      options: {
        // Run in report/ dir and ignore STDERR
        stderr: false,
        execOptions: {
          cwd: 'report'
        }
      },

      compile: {
        command: 'make pdf'
      },

      clean: {
        command: 'make clean'
      }

    },

    watch: {
      files: [
        'report/main.tex',
        'report/partials/*.tex',
        'report/partials/*.bib',
      ],
      tasks: ['shell:compile', 'shell:clean'],
    },

  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
