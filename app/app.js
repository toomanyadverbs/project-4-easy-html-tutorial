(function tutorialAppIIFE(angular) {
  var app = angular.module('tutorialApp', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'tutorialController',
      templateUrl: 'app/views/welcome.html'
    })
      .when('/castle', {
        controller: 'tutorialController',
        templateUrl: 'app/views/tutorial.html'
      })
  });

})(angular);
