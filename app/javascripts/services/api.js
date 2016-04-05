/**
 *
 * @name Api
 * @summary Global service for data handling with API
 * @param {service} $http - Angular builtin service
 * @param {service} loader - Calls loader service before http request and after the response
 * @param {string} [multiple] - Some method have their own parameters
 * @callback  Anonymous function - called in controllers and directives to for data handling and additional settings and view manipulation
 * @returns {object|Array} Result of http call
 * @requires $http As dependency for angular module
 *
 **/

define(['./module'], function (services) {
  'use strict';
  services.service('Api', [
    '$http',
    function ($http) {

      /** home namespace */
      this.items = {};


      /**
       * @name items.getList
       * @returns {object} data
       */
      this.items.getList = function () {
        //Loader.global.show();
        return $http.get(app.apiBaseUrl + 'items-list.json').success(function (response) {
          /** hide the loader successful ajax request */
          //Loader.global.hide();
          return response.data;
        });
      };


    }
  ]);
});

