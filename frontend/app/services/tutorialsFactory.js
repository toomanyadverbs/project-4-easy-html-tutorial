(function tutorialsFactoryIIFE() {

  // Create a customers factory
  var tutorialsFactory = function($http) {
    var factory = {};
    // factory.tutorial = {};
    // factory.tutorials = [];
    factory.lessons = [];
    factory.questions = [];
    factory.answers = [];

    factory.getLessons = function() {
      return $http.get('http://localhost:3000/lessons');
    };

    // factory.getTutorial = function(customerId) {
    //   return $http.get('http://localhost:3000/lesson/' + lessonId).success(function(response) {
    //     angular.copy(response, factory.tutorial);
    //   })
    // };

    factory.getQuestions = function() {
      return $http.get('http://localhost:3000/questions');
    };

    factory.getAnswers = function() {
      return $http.get('http://localhost:3000/answers');
    };

    return factory;
  };

  tutorialsFactory.$inject = ['$http'];

  angular.module('tutorialApp').factory('tutorialsFactory', tutorialsFactory);
})();
