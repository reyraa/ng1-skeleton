/**
 * Created by alihaghighatkhah on 3/13/16.
 */

/**
 *
 *
 *
 */
app.run(['$rootScope',
  function ($rootScope) {
    $rootScope.flags = {
      menu: false
    };

    $rootScope.$on('$stateChangeStart', function() {


    });
  }
]);
