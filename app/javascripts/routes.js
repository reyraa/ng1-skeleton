define(['./app'], function (app) {
  'use strict';

  app.apiBaseUrl = '/api/';

  return app.config(['$stateProvider', '$logProvider', '$urlRouterProvider',
    function ($stateProvider, $logProvider, $urlRouterProvider) {

      $logProvider.debugEnabled(true);


      /**
       *
       * Defining states
       * Here only one state is defined which is the detail page of the product
       * as shown in PNG outputs
       *
       */
      $stateProvider

        .state('items', {
          url: "/",
          templateUrl: "templates/home/main.html",
          controller: 'HomeController'
        });

      $urlRouterProvider.otherwise('/');
  }]);
});