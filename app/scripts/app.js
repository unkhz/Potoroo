'use strict';

/**
 * @ngdoc overview
 * @name potorooApp
 * @description
 * # potorooApp
 *
 * Main module of the application.
 */
angular
  .module('potorooApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
