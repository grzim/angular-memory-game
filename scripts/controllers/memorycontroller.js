'use strict';

/**
 * @ngdoc function
 * @name memoryAppApp.controller:MemorycontrollerCtrl
 * @description
 * # MemorycontrollerCtrl
 * Controller of the memoryAppApp
 */

var hiddenAtributes={
    "opacity": 0,
    "cursor" : "initial"
}

var pictures={

}
angular.module('memoryApp')
  .controller('MemoryCtrl', function ($scope, $timeout) {
        var buffer = {};
        var revealed = 0;
        var pernamentHide = false;
        $scope.revealed = 0;
        $scope.number=10;
        $scope.cards = [];
        $scope.update=function(number){
            for(var i=0;i<number*2;i++){
                $scope.cards.push({hidden:false,url:""});
            }
        }
        $scope.reveal = function(elem, index){
            var target = elem.target;
            if(target.css('opacity')==0) return;
            if(index>=$scope.number)
                index = index - $scope.number;
            if($scope.revealed==0)
                buffer = target;
            else{
                if(buffer === target){
                    pernamentHide=true;
                }

            }
            target.css({"backgroung-image":"url(images/cake_"+index+")"});
            $scope.revealed++;

            $timeout(function() {
                target.css({"backgroung-image": none});
                if (revealed == 2) {
                    revealed = 0;
                    if(pernamentHide){
                        buffer.css(hiddenAtributes); //zmienic na zmienne zeby cotroller nie zmienial DOMu
                        target.css(hiddenAtributes);
                        pernamentHide = false;
                    }
                    buffer={};
                }
            },1500)
        }
    });
