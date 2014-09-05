'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:memoryDirective
 * @description
 * # memoryDirective
 */
angular.module('memoryApp')
  .directive('card', function () {
    return {
      scope: true,
      template: '<div class="card" ng-click="reveal()" ng-class="{ \'col-sm-3 big\':number<10, \'col-sm-2 small\':number > 9 }" ng-style="{\'background-image\': revealed ? url : \'none\'  }"></div>',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.url = 'url('+attrs.url+')';
        var url = 'url('+attrs.url+')';
        scope.revealed = false;
        scope.gone = false;
        scope.reveal = function(){
            console.log('aaaaaaa')
            scope.revealed = true;
            scope.$emit("revelation")
        }
        scope.hide = function(){
            scope.revealed = false;
        }
        scope.pernamentHide = function(){
            scope.$off('click',reveal);
            scope.$off('hide', pernamentlyHide);
            scope.revealed = false;
            scope.gone = true;
        }
        scope.$on('click',scope.reveal);
        scope.$on('hide',scope.hide);
        scope.$on('pernamentHide', scope.pernamentHide);
      }
    };
  });
