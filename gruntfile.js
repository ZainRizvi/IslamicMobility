(function () {

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        nodemon: {
            all: {
                script: './bin/www',
                options: {
                    watchedExtensions: ['js']
                }
            }
        },

        jasmine_node: {
          options: {
            forceExit: true,
            match: '.',
            matchall: false,
            extensions: 'js',
            specNameMatcher: 'spec'
          },
          all: ['test/spec/'],
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-jasmine-node');
    
    grunt.registerTask('default', ['nodemon']);
    grunt.registerTask('test', ['jasmine_node']);
};

}());
