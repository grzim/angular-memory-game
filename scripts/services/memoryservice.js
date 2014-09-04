'use strict';

/**
 * @ngdoc service
 * @name appApp.memoryService
 * @description
 * # memoryService
 * Service in the appApp.
 */
angular.module('memoryApp')
    .service('photoService', function() {
        this.images = new Array(20);
        for(var i=0;i<20;i++){
            this.images[i] = "images/cake_" + (i+1) +'.png';
        }
    })
    .constant('hiddenAttributes',{
        "opacity": 0,
        "cursor" : "initial"
    });
