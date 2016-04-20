var app = angular.module('app', []);

app.directive('game', function() {
  return {
    restrict: 'E',
    scope: {
      title: '=',
      creator: '=',
      tags: '='
    },
    replace: true,
    templateUrl: './templates/game.html'
  }
})
