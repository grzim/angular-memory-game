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
        $scope.revealed = 0;
        $scope.number=10;
        $scope.cards = [];
        $scope.update=function(number){
            for(var i=0;i<number*2;i++){
                $scope.cards.push({hidden:false,url:""});
            }
        }

    })
    .controller('CardCtrl', function($scope, $timeout){
        var buffer = {};
        var revealedCards = 0;
        var process = function(){
            var $target = angular.element($event.target);
            if($target===buffer){
                return;
            }
            revealedCards++;
            if(revealedCards==1){
                buffer=$target;
            }
            else if(revealedCards==2){
                $timeout(function(){
                    if(buffer.css('background-image')===$target.css('background-image')){
                        $scope.$broadcast("pernamentHide");
                        revealedCards = 0;
                    }
                    else{
                        $scope.$broadcast("hide");
                    }
                    buffer = {};
                },1500)
            }

        }
        $scope.$on("revealed", process);

    });
