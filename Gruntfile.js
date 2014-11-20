module.exports = function(grunt) {

	grunt.initConfig({
		'connect': {
			demo: {
				options: {
					open: true,
					keepalive: true
				}
			}
		},
		'replace': {
			src: {
				src: ['*.html'],
				dest: './',
				replacements: [{
					from: 'bower_components',
					to: '..'
				}]
			},
			demo: {
				src: 'demo/index.html',
				dest: 'demo/',
				replacements: [{
					from: 'bower_components',
					to: '..'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-text-replace');

	grunt.registerTask('build',  ['replace']);
	grunt.registerTask('server', ['connect']);

};
