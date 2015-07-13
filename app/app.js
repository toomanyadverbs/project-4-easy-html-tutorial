(function tutorialAppIIFE(angular) {
  var app = angular.module('tutorialApp', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'tutorialController',
      templateUrl: 'app/views/tutorial.html'
    })
    // .when('/songs', {
    //   controller: 'songsController as songCtrl',
    //   templateUrl: 'app/views/songs.html'
    // })
  });

})(angular);
