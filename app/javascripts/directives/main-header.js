/**
 *
 * @name mainHeader
 * @summery the template of main header is separateled by this directive in order to make index.html more clear
 *
 */
define(['directiveModule'], function (directives) {
  'use strict';
  directives.directive('mainHeader', [function () {


    return {
      templateUrl: '/templates/misc/main-header.html',
      replace: true
    };

  }]);
});
