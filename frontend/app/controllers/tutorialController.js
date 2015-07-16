(function tutorialControllerIIFE() {
  var TutorialController = function(tutorialsFactory, appSettings) {
    this.sortBy = "id";
    this.reverse = false;
    this.lessons = tutorialsFactory.lessons;
    this.questions = tutorialsFactory.questions;
    this.answers = tutorialsFactory.answers;
    // this.questions = data;
    var currentElement = 0;
    this.question = this.questions.id(1);

    function init() {
      // Init the customers from the factory
      //this.customers = customersFactory.getCustomers();
      tutorialsFactory.getTutorials();
    }

    init();

    this.submit = function(answerOption) {
      this.selectedAnswer = answerOption;
      currentElement++;
      this.question = this.questions[currentElement];
    };

    this.makeOptionStyle = function(selectedAnswer) {
      this.selectedOptionStyle = "{'background-color':'" + this.selectedAnswer + "'}"
    };

    this.makeAnswerStyle = function(selectedAnswer) {
      this.selectedAnswerStyle = "{'background-color':'" + this.selectedAnswer + "'}"
    };

  }; //<-------END OF CONTROLLER

  // TutorialController.prototype.doSort = function(propName) {
  //   this.sortBy = propName;
  //   this.reverse = !this.reverse;
  // };

  TutorialController.$inject = ['tutorialsFactory', 'appSettings'];

  angular.module('tutorialApp').controller('tutorialController', TutorialController);

})();
