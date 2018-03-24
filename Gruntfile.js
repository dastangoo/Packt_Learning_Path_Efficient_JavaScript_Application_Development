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
      shell: {
        coverage: {
          command: 'babel-node node_modules/.bin/isparta cover _mocha -- test/**/*.js'
        }
      },
      open: {
        coverage: {
          path: 'coverage/lcov-report/index.html'
          // app: 'Google Chrome'
        }
      },
      sass: {
        options: {
          sourceMap: true,
          outputStyle: "compressed"
        },
        compile: {
            files: {
              'public/css/foodprint.min.css':'public/scss/footprint.scss'
            }
        }
      },
      eslint: {
        all: ['src/*.js', '!/node_modules/**/*.js']
      },
      clean: {
        coverage: ['./coverage']
      }
      
    });
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-clean');

    
    
    grunt.registerTask('test', 'run automated tests', ['mochaTest:unit', 'mochaTest:integration']);
    grunt.registerTask('coverage', 'Generate coverage report', ['clean', 'shell', 'open']);
};

