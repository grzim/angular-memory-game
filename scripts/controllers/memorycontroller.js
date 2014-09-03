'use strict';

/**
 * @ngdoc function
 * @name memoryAppApp.controller:MemorycontrollerCtrl
 * @description
 * # MemorycontrollerCtrl
 * Controller of the memoryAppApp
 */
angular.module('memoryApp')
  .controller('MemoryCtrl', function ($scope, $timeout) {
        var buffer = {};
        var revealed = 0;
        var pernamentHide = false;
        $scope.revealed = 0;
        $scope.number=10;
        $scope.card = [];
        $scope.update=function(number){
            for(var i=0;i<number;i++){
                $scope.card.push({hidden:false,url:""});
            }
        }
        $scope.reveal = function(index){
            console.log(index);
            if($scope.revealed==0)
                buffer = $scope.card[index];
            else{
                if(buffer == $scope.card[index]){
                    pernamentHide=true;
                }

            }
            $scope.card[index].reveal = true; //jak nie zadziaala style to jqlite css
            revealed++;

            $timeout(function() {
                $scope.card[index].reveal = false;//jak nie zadziaala style to jqlite css
                if (revealed == 2) {
                    revealed = 0;
                    if(pernamentHide){
                        buffer.hidden = true;
                        $scope.card[index].hidden = true;
                        pernamentHide = false;
                    }
                    buffer={};
                }
            },1500)
        }
    });
