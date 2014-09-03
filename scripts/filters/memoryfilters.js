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
    .filter('doubleSize', function () {
        return function(input){
            return input.concat(input);
        }
    })
    .filter('fill', function () {
        return function(input, number){
            for(var i=0;i<number;i++){
                input.push();
                input[i]=i+1;
            }
            return input;
        }
    })
    .filter('addUrl',function(pictures){
        return function(input){
            var size = input.length;
            for(var i=0;i<size;i++){
                input[i].url = pictures[i];
            }
        }
    });