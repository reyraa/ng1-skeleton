define([
  'angular',
  'ui.router',
  './controllers/index',
  './directives/index',
  './filters/index',
  './services/index'
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