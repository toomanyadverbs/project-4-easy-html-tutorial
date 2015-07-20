(function tutorialControllerIIFE() {
  var TutorialController = function(tutorialsFactory, appSettings) {
    var vm = this;
    vm.sortBy = "id";
    vm.reverse = false;
    vm.lessons = [];
    vm.questions = [];
    vm.answers = [];
    vm.currentQuestion;

    // this.questions = data;
    var currentElement = 0;
    //this.question = this.questions.id[1];

    function init() {
      // Init the customers from the factory
      //this.customers = customersFactory.getCustomers();
      tutorialsFactory.getQuestions()
        .success(function(response) {
          response.forEach(function(question) {
            vm.questions.push(question);
          });
          vm.currentQuestion = vm.questions[currentElement];
        });
      tutorialsFactory.getAnswers()
        .success(function(response) {
          response.forEach(function(answer) {
            vm.answers.push(answer);
          });
          vm.currentAnswer = vm.answers[currentElement];
        });
      tutorialsFactory.getLessons()
        .success(function(response) {
          response.forEach(function(lesson) {
            vm.lessons.push(lesson);
          });
          vm.currentLesson = vm.lessons[currentElement];
        });

    }

    init();

    this.submit = function(answerOption) {
      this.selectedAnswer = answerOption;
      currentElement++;
      vm.currentQuestion = vm.questions[vm.currentQuestion.nextQuestionId - 1];
      //this.question = this.questions[currentElement];
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
