'use strict';

/**
 * @ngdoc filter
 * @name memoryAppApp.filter:memoryFilters
 * @function
 * @description
 * # memoryFilters
 * Filter in the memoryAppApp.
 */
angular.module('memoryApp')
    .filter('fill', function () {
        return function(input, number, url){
            for(var i=0;i<number;i++){
                    input.push(i+1);
            }
            return input;
        }
    });