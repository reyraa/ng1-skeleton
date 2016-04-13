module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
  require('time-grunt')(grunt);
  grunt.initConfig({
    //load 'package.json'file 
    pkg: grunt.file.readJSON('package.json'),
    config: {
      appUrl: 'app/',
      distUrl: 'dist/',
      devUrl: 'dev/'
    },
    meta: {
        version: '0.1.0',
        banner: '/*! PROJECT_NAME - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* author <%= pkg.author %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
            'Licensed MIT */'
    },
    // compile sass files into css
    sass: {
      development: {
        options: {
          sourceMap: true
        },
        files: {
          '<%=config.devUrl %>css/main.css': '<%=config.appUrl %>sass/main.scss'
        }

      },
      production: {
        options: {
          sourceMap: true
        },
        files: {
          '<%=config.distUrl %>css/main.css': '<%=config.appUrl %>sass/main.scss'
        }
      }



    },
    // create suitable prefix for all browsers
    autoprefixer: {
      options: {
        browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9']
      },
      dist:{
        files:{
          '<%=config.devUrl %>css/main.fixed.css':'<%=config.devUrl %>css/main.css',
        }
      }
    },

    // concatenating all javascripts file
    concat: {
      development: {
          files: {
            '<%=config.devUrl %>/javascripts/controllers.js': '<%=config.appUrl %>/javascripts/controllers/*.js',
            '<%=config.devUrl %>/javascripts/directives.js': '<%=config.appUrl %>/javascripts/directives/*.js',
            '<%=config.devUrl %>/javascripts/services.js': '<%=config.appUrl %>/javascripts/services/*.js',
            '<%=config.devUrl %>/javascripts/filters.js': '<%=config.appUrl %>/javascripts/filters/*.js',
            '<%=config.devUrl %>/javascripts/app.js': '<%=config.appUrl %>/javascripts/app.js',
            '<%=config.devUrl %>/javascripts/main.js': '<%=config.appUrl %>/javascripts/main.js',
            '<%=config.devUrl %>/javascripts/routes.js': '<%=config.appUrl %>/javascripts/routes.js',
            '<%=config.devUrl %>/javascripts/bootstrap.js': '<%=config.appUrl %>/javascripts/bootstrap.js'
          }
      },
      production:{
          files: {
            '<%=config.distUrl %>/javascripts/main.js': ['<%=config.appUrl %>/javascripts/*.js','<%=config.appUrl %>/javascripts/*/*.js'],
          }
      }

    },

    // build node javascripts server
    connect: {
      target: {
        options: {
          port: 9001,
          open: true,
          livereload: 35729,
          hostname: '127.0.0.1',
          middleware : function (connect) {
            return [
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static('./dev')
            ];
          }
        }
      }
    },
    // watch files for changes and do proper action
    watch: {
      js: {
        files: ['<%=config.appUrl %>javascripts/{,*/}*.js'],
        tasks: ['concat:development'],
        options: {
          livereload: '<%= connect.target.options.livereload %>'
        }
      },
      sass: {
        files: ['<%=config.appUrl %>sass/{,*/}*.{scss,sass}'],
        tasks: ['sass:development','autoprefixer'],
        options: {
          livereload: '<%= connect.target.options.livereload %>'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.target.options.livereload %>'
        },
        files: [
          '<%=config.appUrl %>**/*.html',
          '<%=config.appUrl %>images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      options: {
        livereload: true
      }
    },
    // minify css and javascript files
    useminPrepare: {
      html: '<%=config.appUrl %>index.html'
    },
    // replace all javascript and css files with minfy one in html
    usemin: {
      html: "<%=config.distUrl %>/index.html",
    },
    // copy necessary files to dist folder
    copy: {
      production: {
        files:[
          {src: '<%=config.appUrl %>index.html',dest: '<%=config.distUrl %>index.html'},
          {
            cwd: '<%=config.appUrl %>fonts',  // set working folder / root to copy
            src: '**/*',           // copy all files and subfolders
            dest: 'dist/fonts',    // destination folder
            expand: true           // required when using cwd
          },
          {
            cwd: '<%=config.appUrl %>images',  // set working folder / root to copy
            src: '**/*',           // copy all files and subfolders
            dest: '<%=config.distUrl %>images',    // destination folder
            expand: true           // required when using cwd
          },
          {
            cwd: '<%=config.appUrl %>',  // set working folder / root to copy
            src: '**/*.html',           // copy all files and subfolders
            dest: '<%=config.distUrl %>',    // destination folder
            expand: true           // required when using cwd
          },
          {
            cwd: './libs',  // set working folder / root to copy
            src: '**/*',           // copy all files and subfolders
            dest: '<%=config.distUrl %>/libs',    // destination folder
            expand: true           // required when using cwd
          }
        ] 
      },
      development: {
        files:[
          {src: '<%=config.appUrl %>index.html',dest: '<%=config.devUrl %>index.html'},
          {
            cwd: '<%=config.appUrl %>fonts',  // set working folder / root to copy
            src: '**/*',           // copy all files and subfolders
            dest: '<%=config.devUrl %>/fonts',    // destination folder
            expand: true           // required when using cwd
          },
          {
            cwd: '<%=config.appUrl %>images',  // set working folder / root to copy
            src: '**/*',           // copy all files and subfolders
            dest: '<%=config.devUrl %>images',    // destination folder
            expand: true           // required when using cwd
          },
          {
            cwd: '<%=config.appUrl %>',  // set working folder / root to copy
            src: '**/*.html',           // copy all files and subfolders
            dest: '<%=config.devUrl %>',    // destination folder
            expand: true           // required when using cwd
          },
          {
            cwd: './libs',  // set working folder / root to copy
            src: '**/*',           // copy all files and subfolders
            dest: '<%=config.devUrl %>/libs',    // destination folder
            expand: true           // required when using cwd
          }
        ] 
      }
    },
    // clean unwanted folders
    clean: {
      production: {
        src: ["<%=config.distUrl %>/*",'.tmp/*']
      },
      development: {
        src: ["<%=config.devUrl %>/*",'.tmp/*']
      }
    },
    // validate all javascript files by jshint
    jshint: {
      serve: {
        options: {
          "globals": {
            "$": false,
            "angular": false
          },
          ignores: ['<%=config.appUrl %>javascripts/vendor/*javascripts']
        },
        src: [
          '<%=config.appUrl %>javascripts/**/*.js'
        ]
      }
    },
    bower: {
      install: {
        options: {
          targetDir: './libs',
          layout: 'byType',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    }
  });

  /**
   *
   * @name production
   * @summery
   * This task will create the distribution version of the project
   * containing minified javaScript files and uglified css files
   * The destination is /dist
   *
   */
  grunt.registerTask('production',[

    'clean:production',
    'copy:production',
    'sass:production',
    'autoprefixer',
    'useminPrepare:html',
    'concat:production',
    //'uglify',
    'cssmin',
    'usemin'
  ]);


  /**
   *
   * @name development
   * @summery
   * This task will create development files meaning
   * concats JavaScript files and renders SASS files but no minimization.
   * the destination of output files is dev/ directory
   *
   */
  grunt.registerTask('dev',[
    'concat:development',
    'copy:development',
    'sass:development',
    'autoprefixer'
    //,'jshint:serve'
  ]);

  grunt.registerTask('development',[
    'bower',
    'dev'
  ]);

  /**
   *
   * @name serve
   * @summery
   * This task works same as build:serve, but watches for upcoming changes too.
   *
   */
  grunt.registerTask('serve', [
    'dev',
    'connect:target',
    'watch'
  ]);
}