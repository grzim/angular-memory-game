'use strict';
angular.module('memoryApp')
    .value('pairsNumber', {
        value : 10
    })
    .service('shuffle',function(){
        this.process=function(array) {
            var counter = array.length, temp, index;

            // While there are elements in the array
            while (counter > 0) {
                // Pick a random index
                index = Math.floor(Math.random() * counter);

                // Decrease counter by 1
                counter--;

                // And swap the last element with it
                temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }
            return array;
        }
    })
    .service('photos', function() {
        var images = new Array(20);
        for(var i=0;i<20;i++){
            images[i] = "images/cake_" + (i+1) +'.png';
        }
        return images;
    });
