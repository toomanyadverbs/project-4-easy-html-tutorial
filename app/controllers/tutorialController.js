(function tutorialControllerIIFE(data, ang) {
  var TutorialController = function() {
    this.sortBy = "id";
    this.reverse = false;
    this.data = data;


    // this.getCSS = function(inputFieldValue) {
    //   //$pristine = field has never been changed
    //   if (inputFieldValue.$pristine) {
    //     return "";
    //   }
    //   //$valid = will be true if the field is valid
    //   // 'valid' = meets all the contraints that have been attached to the field. (minlength, pattern, required, etc.)
    //   return inputFieldValue.$valid ? "fieldValid" : "fieldInvalid";
    // };

    this.submit = function(answerOption) {
      this.selectedAnswer = answerOption;
      return this.selectedAnswer;
    };

    this.makeOptionStyle = function(selectedAnswer) {
      return this.selectedOptionStyle = "{'background-color':'" + this.selectedAnswer + "'}"
    };

    this.makeAnswerStyle = function(selectedAnswer) {
      return this.selectedAnswerStyle = "{'background-color':'" + this.selectedAnswer + "'}"
    };

  }; //<-------END OF CONTROLLER

  // TutorialController.prototype.doSort = function(propName) {
  //   this.sortBy = propName;
  //   this.reverse = !this.reverse;
  // };

  ang.module('tutorialApp').controller('tutorialController', TutorialController);

})(tutorialData, angular);
