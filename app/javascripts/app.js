var app = angular.module('app',
  ['ui.router']
);

app.apiBaseUrl = '/api/';



app.config(['$stateProvider', '$logProvider', '$urlRouterProvider',
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
      url: "/items",
      templateUrl: "templates/items/main.html",
      controller: 'ItemsController'
    });

    $urlRouterProvider.otherwise('/');


  }
]);

