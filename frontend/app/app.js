(function tutorialAppIIFE(angular) {
  var app = angular.module('tutorialApp', ['ngRoute', 'ui.ace']);

  app.config(['$httpProvider',
    function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
    }
  ]);

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
