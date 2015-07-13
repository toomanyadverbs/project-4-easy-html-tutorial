(function tutorialAppIIFE(ang) {
  var app = ang.module('tutorialApp', ['ui.ace']);

  app.config(function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'tutorialController as tutCtrl',
      templateUrl: 'app/views/tutorial.html'
    })
    // .when('/songs', {
    //   controller: 'songsController as songCtrl',
    //   templateUrl: 'app/views/songs.html'
    // })
  });

})(angular);
