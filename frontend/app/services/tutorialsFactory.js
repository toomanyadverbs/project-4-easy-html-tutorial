(function tutorialsFactoryIIFE() {

  // Create a customers factory
  var tutorialsFactory = function($http) {
    var factory = {};
    factory.tutorial = {};
    factory.tutorials = [];

    factory.getTutorials = function() {
      // allow access to the list of customers
      return $http.get('http://localhost:3000/tutorial').success(function(response) {
        angular.copy(response, factory.tutorials);
      });
    };

    factory.getTutorial = function(customerId) {
      return $http.get('http://localhost:3000/tutorial/' + lessonId).success(function(response) {
        angular.copy(response, factory.tutorial);
      })
    };
    return factory;
  };

  tutorialsFactory.$inject = ['$http'];

  angular.module('tutorialApp').factory('tutorialsFactory', tutorialsFactory);
})();
