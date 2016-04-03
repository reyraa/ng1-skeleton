/**
 *
 * @name SampleController
 * @param {object} $scope - the scope object specific for this controller
 * @param {service} Api - See app/js/services/app.js
 *
 * @summery
 *
 */
app.controller('SampleController', ['$scope', 'Api',
  function ($scope, Api) {


    Api.items.getList().success(function (result) {
      $scope.items = result.data;
    });

  }
]);
