/**
 *
 * @name HomeController
 * @param {object} $scope - the scope object specific for this controller
 *
 * @summery
 *
 */


define(['controllerModule'], function (controllers) {
  'use strict';
  controllers.controller('HomeController', ['$scope', function ($scope) {


    $scope.welcome = {
      title: 'ng1-skeleton',
      description: 'This project is an application skeleton for a typical AngularJS 1.X web app',
      url: 'https://github.com/alihaghighatkhah/ng1-skeleton'
    }

  }]);
});