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
    .filter('fill', function (photoService) {
        var photo = photoService;
        return function(input, number, url){
            for(var i=0;i<number;i++){
                input.push();
                if(angular.isDefined(url)){
                    input[i] = photo[i];
                }
                else
                    input[i]=i+1;
            }
            return input;
        }
    });