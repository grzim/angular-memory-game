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
    .filter('fill', function (photos) {
        var photo = photos;
        return function(input, number, url){
            for(var i=0;i<number;i++){
                if(angular.isDefined(url)){
                    input.push(photo[i]);
                }
                else
                    input.push(i+1);
            }
            return input;
        }
    });