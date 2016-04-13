define([
  'angular',
  'ui.router',
  './controllers',
  './directives',
  './filters',
  './services'
], function (angular) {
  'use strict';

  return angular.module('app', [
    'ui.router',
    'app.services',
    'app.controllers',
    'app.filters',
    'app.directives'
  ]);
});