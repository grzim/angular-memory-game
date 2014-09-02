'use strict';

/**
 * @ngdoc function
 * @name memoryAppApp.controller:MemorycontrollerCtrl
 * @description
 * # MemorycontrollerCtrl
 * Controller of the memoryAppApp
 */
angular.module('memoryAppApp')
  .controller('MemoryCtrl', function ($scope) {
        var buffer = {};
        var revealed = 0;
        $scope.revealed = 0;
        $scope.card = [];
        $scope.update=function(number){
            for(var i=0;i<number;i++){
                card.push();
            }
        }
        $scope.reveal = function(index){
            var pernamentHide = false;
            if(revealed==0)
                buffer = card[index];
            else{
                if(buffer == card[$index]){
                    pernamentHide=true;
                }
                buffer={};
            }
            $scope.card[index].reveal = true; //jak nie zadziaala style to jqlite css
            revealed++;
            timeout
            $scope.card[index].reveal = false;//jak nie zadziaala style to jqlite css
            if(revealed==2) revealed=0
            if(pernamentHide)
                buffer.hidden = true;
            card[$index].hidden = true;
            pernamentHide=false;
        }
    });
