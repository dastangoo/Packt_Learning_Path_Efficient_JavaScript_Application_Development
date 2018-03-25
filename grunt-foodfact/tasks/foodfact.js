module.exports = function(grunt) {

    /**
     * Register the Grunt task foodfact
     */
    grunt.registerMultiTask('foodfact', 'The best Grunt plugin', function() {
        var options = {
            download: false
        };
        var urls =this.data.urls;
        grunt.log.debug('Task: ' + this.name);
        grunt.log.debug('Target: ' + this.target);

        grunt.log.debug('URLs: ' + urls);
        if (options.download) {
            grunt.log.debug('Download: ok');
        }

        this.files.forEach(function(file) {
            grunt.log.debug('Destination: ' + file.dest);
            grunt.log.debug('Sources: ' + file.src);
        });
    });
};
