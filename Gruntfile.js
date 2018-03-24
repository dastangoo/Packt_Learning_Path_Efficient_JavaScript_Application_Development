module.exports = function(grunt) {
    grunt.initConfig({
      mochaTest: {
        options: {
          reporter: 'spec',
          require: 'babel-register'
        },
        unit: {
          src: ['test/unit/**/*_spec.js']
        },
        integration: {
          src:['test/integration/**/*.js']
        }
      },
      sass: {
        options: {
          sourceMap: true,
          outputStyle: "compressed"
        },
        compile: {
          files: {
            'public/css/foodprint.css': 'public/scss/footprint.scss'
          }
        }
      },
      eslint: {
        all: ['src/*.js', '!/node_modules/**/*.js']
      }
    });
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha-test');
    
    grunt.registerTask('test', 'run automated tests', ['mochaTest:unit', 'mochaTest:integration']);
};

