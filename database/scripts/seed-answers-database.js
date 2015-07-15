var mongoose = require('mongoose');
var async = require('async');
var Answer = require('../lib/answers.js');

mongoose.connect('mongodb://localhost/tutorial');

// Function to remove all Users on seed
var removeAnswers = function(done) {
  Answer.remove({}, done);
};

async.series([
  removeAnswers,
  function(done) {
    Answer.create({
      id: 1,
      buttonStyle: 'yop',
      buttonLabel: 'nop',
      editorHTML: 'nope',
      editorCSS: 'yup'
    }, done);
  }
], function(err) {
  if (err) {
    console.log(err);
  }
  mongoose.disconnect();
});
