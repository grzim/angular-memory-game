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
    .filter('doubleSize', function () {
    return  input.concat(input);
    })
    .filter('fill', function (number) {
        for(var i=0;i<number;i++){
            input[i].push(i+1);
        }
        return input;
    });