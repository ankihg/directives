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

app.directive('userProfile', function() {
  return {
    restrict: 'E',
    scope: {
      name: '=',
      dateJoined: '=',
      games: '='
    },
    replace: true,
    templateUrl: './templates/user-profile.html'
  }
})
