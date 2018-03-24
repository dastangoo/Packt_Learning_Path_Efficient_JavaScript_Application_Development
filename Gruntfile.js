module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            compile: {
                files: {
                    'public/css/foodprint.min.css': ['public/scss/foodprint.scss']
                },
                options: {
                    sourceMap: true,
                    outputStyle: 'compressed'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
};

