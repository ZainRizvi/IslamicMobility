
module.exports = function (grunt) {
    grunt.initConfig({
        nodemon: {
            all: {
                script: './bin/www',
                options: {
                    watchedExtensions: ['js']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['nodemon']);
};
