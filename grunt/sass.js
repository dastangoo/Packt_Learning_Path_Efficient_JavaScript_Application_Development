module.exports = function(grunt) {
  grunt.config.merge({
    sass: {
      options: {
          sourceMap: true,
          outputStyle: 'compressed'
      },
      compile: {
          files : [{
              dest: '<%= pkg.cfg.baseDir %>css/foodprint.css',
              src : '<%= pkg.cfg.baseDir %>scss/foodprint.scss'
          }]
      }      
    },
    watch: {
      files: ['<%= pkg.cfg.baseDir %>js/scss/**/*.scss'],
      tasks: ['sass:compile'],
      options: {
        livereload: true
      }
    }
  });
  // grunt.config('sass', { 
  //   options: {
  //       sourceMap: true,
  //       outputStyle: 'compressed'
  //   },
  //   compile: {
  //       files : [{
  //           dest: '<%= pkg.cfg.baseDir %>css/foodprint.css',
  //           src : '<%= pkg.cfg.baseDir %>scss/foodprint.scss'
  //       }]
  //   }
  // });
  // 
  // var watch = grunt.config('watch') || {};
  // watch.sass = {
  //   files: ['<%= pkg.cfg.baseDir %>js/scss/**/*.scss'],
  //   tasks: ['sass:compile'],
  //   options: {
  //     livereload: true
  //   }
  // };
  // grunt.cofnig('watch', watch);
}