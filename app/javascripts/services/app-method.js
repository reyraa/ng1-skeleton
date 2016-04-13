/**
 *
 *
 *
 */
define('serviceModule', function (services) {
  'use strict';
  services.run(['$rootScope',
    function ($rootScope) {
      $rootScope.flags = {
        menu: false
      };

      $rootScope.$on('$stateChangeStart', function() {

      });
    }
  ]);
});

