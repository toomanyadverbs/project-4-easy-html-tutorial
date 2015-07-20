var mongoose = require('mongoose');
var async = require('async');
var Question = require('../lib/questions.js');
var Answer = require('../lib/answers.js');

mongoose.connect('mongodb://localhost/tutorial');

// Function to remove all Users on seed
var removeQuestions = function(done) {
  Question.remove({}, done);
};

async.series([

    function(callback) {
        ...
      callback(error, result);
    },
    function(callback) {
        ...
      callback(error, result);
    },
    function(callback) {
        ...
      callback(error, result);
    },
  ],
  function(err, results) {
      ...
  }
);


async.series([
  removeQuestions,
  function(done) {
    Question.create({
      id: 1,
      content: 'First, we will need the sky. What color would you like the sky to be?',
      answerOptions: ["55a6c9973100e53929e32384"],
      questionPosition: 1,
      nextQuestionId: 2
    }, done);
    Question.create({
      id: 2,
      content: 'Then the castle will need ground to stand on!',
      answerOptions: [],
      questionPosition: 2,
      nextQuestionId: 3
    }, done);
  }
], function(err) {
  if (err) {
    console.log(err);
  }
  mongoose.disconnect();
});
