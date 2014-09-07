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
      scope: false,
      template: '<div class="card"  ' +
                  'ng-click="reveal()" ' +
                  'ng-class="{ ' +
                      '\'col-sm-3 big\':number.value<10, ' +
                      '\'col-sm-2 small\':number.value > 9, ' +
                      'gone:gone }"' +
                  ' ng-style="{\'background-image\': revealed ? url : \'none\'  }"></div>',
      restrict: 'E',
      link: function (scope, element, attrs) {
        var init = function(){
            killReset = scope.$on('reset',reset);
            killHide = scope.$on('hide',hide);
            killPernamentHide =  scope.$on('pernamentHide', pernamentHide);
            scope.gone = false;
            scope.revealed = false;

            console.log(scope.url);
        }
        scope.reveal = function(){
            if(!scope.gone) {
                scope.url = 'url('+attrs.url+')';
                scope.$emit("revelation");
            }
        }
        var hide = function(){
            scope.revealed = false;
        }
        var pernamentHide = function(){
            if(scope.revealed) {
                killHide();
                killPernamentHide();
                scope.revealed = false;
                scope.gone = true;
            }
        }
        var reset=function(){
           init();
        }
        init();
        var killReset;
        var killHide;
        var killPernamentHide;
      }
    };
  });
