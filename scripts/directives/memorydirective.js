'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:memoryDirective
 * @description
 * # memoryDirective
 */
angular.module('memoryApp')
  .directive('memoryDirective', function (hiddenAttributes) {
    return {
      scope: true,
      template: '<div></div>',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.revealed = false;
        scope.gone = false;
        function reveal(){
            if(scope.revealedCards==1){
              return;
            }
            var target = $event.target;
            scope.revealedCards++;
        }

        element.on('click',reveal);
      }
    };
  });
