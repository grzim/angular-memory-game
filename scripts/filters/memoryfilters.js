'use strict';

/**
 * @ngdoc filter
 * @name memoryAppApp.filter:memoryFilters
 * @function
 * @description
 * # memoryFilters
 * Filter in the memoryAppApp.
 */
angular.module('memoryAppApp')
  .filter('memoryFilters', function () {
    return function (input) {
      return 'memoryFilters filter: ' + input;
    };
  });
