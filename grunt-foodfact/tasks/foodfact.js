module.exports = function(grunt) {

    /**
     * Register the Grunt task foodfact
     */
    grunt.registerMultiTask('foodfact', 'Load the foodfact database', function() {
        var options = this.options({
            urls: []
        });
        grunt.log.writeln('Loading the database...');
        grunt.log.debug(options.urls);
        grunt.log.ok('Database loaded');
    });
};
