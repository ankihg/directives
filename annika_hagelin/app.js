var app = angular.module('app', []);

app.directive('highlight', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attr) {
      elem.on('click', function() {
        elem.css('background-color', 'blue');
        elem.css('color', 'white');
      })
    }
  }
});

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
  };
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
  };
});

app.directive('userBrief', function() {
  return {
    restrict: 'E',
    scope: {
      name: '=',
      dateJoined: '=',
      games: '='
    },
    replace: true,
    templateUrl: './templates/user-brief.html'
  };
});
