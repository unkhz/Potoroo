'use strict';

/**
 * @ngdoc function
 * @name potorooApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potorooApp
 */
angular.module('potorooApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [
      {firstName:'I.R.', lastName:'Baboon'},
      {firstName:'I am', lastName:'Weasel'}
    ];
  });
