function confugGrunt(grunt) {
    var config = {};

    config.clean = {
        sass: ['./assets/css/*.*', '!./assets/css/*.min.css']
    };

    config.sass = {
        dist: {
            files: [{
                expand: true,
                cwd: './assets/sass',
                src: ['*.scss'],
                dest: './assets/css',
                ext: '.css'
            }]
        }
    };

    require('load-grunt-tasks')(grunt);
    grunt.initConfig(config);
    grunt.registerTask('build', ['clean', 'sass']);
    grunt.registerTask('default', ['build']);
}

module.exports = confugGrunt;
