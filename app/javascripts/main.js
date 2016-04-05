require.config({

  // alias libraries paths
  paths: {
    'domReady': '../libs/requirejs-domready/domReady',
    'angular': '../libs/angular/angular',
    'ui.router': '../libs/angular-ui-router/angular-ui-router'
  },

  // angular does not support AMD out of the box, put it in a shim
  shim: {
    'angular': {
      exports: 'angular'
    },
    'ui.router': {
      deps: ['angular']
    }
  },

  // kick start application
  deps: ['./bootstrap']
});
