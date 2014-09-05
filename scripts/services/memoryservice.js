'use strict';

/**
 * @ngdoc service
 * @name appApp.memoryService
 * @description
 * # memoryService
 * Service in the appApp.
 */
angular.module('memoryApp')
    .service('photos', function() {
        var images = new Array(20);
        for(var i=0;i<20;i++){
            images[i] = "images/cake_" + (i+1) +'.png';
        }
        return images;
    });
