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
      answerOptions: ['55a6c9973100e53929e32384'],
      questionPosition: 1,
      nextQuestionId: 2
    }, done);
    Question.create({
      id: 2,
      content: 'Then the castle will need ground to stand on! What color should that be?',
      answerOptions: [],
      questionPosition: 2,
      nextQuestionId: 3
    }, done);
    Question.create({
      id: 3,
      content: 'Lets build a wall.',
      answerOptions: [],
      questionPosition: 3,
      nextQuestionId: 4
    }, done);
    Question.create({
      id: 4,
      content: 'Now, some towers! Select color:',
      answerOptions: [],
      questionPosition: 4,
      nextQuestionId: 5
    }, done);
    Question.create({
      id: 5,
      content: 'Now, lets top those off. What shape should the tower tops be?',
      answerOptions: [],
      questionPosition: 5,
      nextQuestionId: 6
    }, done);
    Question.create({
      id: 6,
      content: 'Do you want those tower tops to be a different color?',
      answerOptions: [],
      questionPosition: 6,
      nextQuestionId: 7
    }, done);
    Question.create({
      id: 7,
      content: 'Ok, now we shoud probably be able to get into the castle, right? Choose the color of the door.',
      answerOptions: [],
      questionPosition: 7,
      nextQuestionId: 8
    }, done);
    Question.create({
      id: 8,
      content: 'Ok, now lets hang a banner on the castle! Choose a color, and then - very important - type in the castles name!',
      answerOptions: [],
      questionPosition: 8,
      nextQuestionId: 9
    }, done);
    Question.create({
      id: 9,
      content: 'Wow, that is beautiful! Five stars.',
      answerOptions: [],
      questionPosition: 9,
      nextQuestionId: 10
    }, done);
  }
], function(err) {
  if (err) {
    console.log(err);
  }
  mongoose.disconnect();
});
