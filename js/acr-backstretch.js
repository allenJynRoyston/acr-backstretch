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
              $(elem).css({'width': 'auto',  'height': scope.fillheight});
              if(scope.duration == undefined){scope.duration = 500;};
              if(scope.fade == undefined){scope.fade = 500;};
              $(elem).backstretch([scope.fillsrc], {duration: scope.duration, fade: scope.fade});
        },

    };
  }
]);
