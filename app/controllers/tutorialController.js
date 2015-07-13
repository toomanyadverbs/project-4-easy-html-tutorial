(function tutorialControllerIIFE(data, ang) {
  var TutorialController = function() {
    this.sortBy = "id";
    this.reverse = false;
    this.data = data;
    // this.aceLoaded = function(_editor) {
    //   var _session = _editor.getSession();
    //   var _renderer = _editor.renderer;
    //   // Options
    //   //_editor.setReadOnly(true);
    // };
    // this.aceChanged = function(e) {
    //   //
    // };
  };

  // TutorialController.prototype.doSort = function(propName) {
  //   this.sortBy = propName;
  //   this.reverse = !this.reverse;
  // };

  ang.module('tutorialApp').controller('tutorialController', TutorialController);

})(tutorialData, angular);
