'use strict';
angular.module('acrBackstretch', []).directive('backstretch', [
  '$timeout',
  function ($compile) {
    return {
        restrict: 'AE',
        scope:{
          fillsrc: '=',
          fillheight: '=',
          duration: '=',
          fade: '='
        },
        link: function(scope, elem, attr) {

              var t = {
                duration: scope.duration || 500,
                fade: scope.fade || 500,
                fillheight: scope.fillheight || 250,
                fallback: scope.fallback || "http://lorempixel.com/400/200/technics/8/"
              }

              $(elem).css({'width': 'auto',  'height': t.fillheight});
              $(elem).backstretch([scope.fillsrc], {duration: t.duration, fade: t.fade});
              $(elem).find('img').error(function(){
                $(this).attr("src", t.fallback)
              })

        },

    };
  }
]);

