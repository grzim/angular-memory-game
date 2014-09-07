'use strict';

/**
 * @ngdoc function
 * @name memoryAppApp.controller:MemorycontrollerCtrl
 * @description
 * # MemorycontrollerCtrl
 * Controller of the memoryAppApp
 */


angular.module('memoryApp')
  .controller('ConfigCtrl', function ($scope, $rootScope, $timeout, pairsNumber) {
        $scope.number=pairsNumber;
        $scope.update=function(number){
            for(var i=0;i<number*2;i++){
                $scope.cards.push({hidden:false,url:""});
            }
        }
        $scope.reset=function(){
            $rootScope.$broadcast('reset');
            $rootScope.$broadcast('init');
        }

    })
    .controller('CardCtrl', function($scope, $timeout, pairsNumber, shuffle, photos){
        var init = function(){
            $scope.$on('reset',reset);
            $scope.$on("revelation", revelation);
            $scope.number = pairsNumber;
            buffer = {};
            revealedCards = 0;
            $scope.cards = [];
            var photo = photos;
            for(var i = 0;i<$scope.number.value;i++){
                $scope.cards.push(photo[i]);
            }
            $scope.cards = $scope.cards.concat($scope.cards);
            $scope.cards = shuffle.process($scope.cards);
            console.info($scope.cards);
        }
        var revelation = function($event){
            var $target = $event.targetScope;
            if($target===buffer){
                return;
            }

            if(revealedCards==0){
                buffer=$target;
            }
            else if(revealedCards==1){
                $timeout(function(){
                    if(buffer.url===$target.url){
                        $scope.$broadcast("pernamentHide");
                    }
                    else{
                        $scope.$broadcast("hide");
                    }
                    revealedCards = 0;
                    buffer = {};
                },1500)
            }
            else{
                return;
            }
            revealedCards++;
            $target.revealed = true;
        }
        var reset = function(){
            $scope.cards = [];
        }
        var buffer;
        var revealedCards;
        $scope.$on('init',init);
        init();
    });
