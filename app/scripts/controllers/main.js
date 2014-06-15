'use strict';

/**
 * @ngdoc function
 * @name potorooApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potorooApp
 */
angular.module('potorooApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/items').success(function(items) {
      $scope.items = items;
    });
  });
