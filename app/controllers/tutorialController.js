(function tutorialControllerIIFE(data, ang) {
  var TutorialController = function() {
    this.sortBy = "name";
    this.reverse = false;
    this.customers = data;
  };

  TutorialController.prototype.doSort = function(propName) {
    this.sortBy = propName;
    //this flips the value of 'reverse' between false and true every time the function runs:
    this.reverse = !this.reverse;
  };

  ang.module('tutorialApp').controller('tutorialController', TutorialController);
})(tutorialData, angular);
