var parse = require('../lib/parse.js');
var path = require('path');

module.exports = function(grunt) {

    /**
     * Register the Grunt task foodfact
     */
    grunt.registerMultiTask('foodfact', 'The best Grunt plugin', function() {
        var done    = this.async();
        var count   = 0;
        var srcLength = this.fileSrc.length;

        grunt.log.debug(srcLength + ' files to parse');
        this.files.forEach(function(file) {
            var destDir =path.dirname(file.dest);
            grunt.log.debug('Destination: ' + file.dest);
            grunt.log.debug('Sources: ' + file.src);

            if (! grunt.file.exists(destDir)) {
                grunt.file.mkdir(destDir);
            }

            var result = '';
            file.src.forEach(function(src) {
                parse(src, {}, function(err, data) {
                    if (err) {
                        throw err;
                    }

                    result += JSON.stringify(data);

                    if (++count == srcLength) {
                        grunt.log.debug('writing to ' + file.dest);
                        grunt.file.write(file.dest, result);
                        done();
                    }
                });
            });
        });
    });
};
