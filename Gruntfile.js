module.exports=function(grunt){
    grunt.initConfig({
        sass: {                              
            dist: {                            
                options: {                       
                    style: 'expanded'
                },
                files: {                          
                    'styles/main.css': 'styles/main.scss'
                }
            }
        },
	watch: {
            scripts: {
                files: ['styles/*.scss'],
                tasks: ['sass'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','watch']);
};
