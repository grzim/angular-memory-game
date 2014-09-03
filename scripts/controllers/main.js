'use strict';

/**
 * @ngdoc function
 * @name memoryAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoryAppApp
 */
angular.module('memoryApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
