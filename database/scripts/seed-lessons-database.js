var mongoose = require('mongoose');
var async = require('async');
var Lesson = require('../lib/lessons.js');
var Question = require('../lib/questions.js');
var Answer = require('../lib/answers.js');

mongoose.connect('mongodb://localhost/tutorial');

// Function to remove all Users on seed
var removeLessons = function(done) {
  Lesson.remove({}, done);
};

async.series([
  removeLessons,
  function(done) {
    Lesson.create({
      name: 'Build A Castle',
      questions: ["55a6d126400987722bb76c66"]
    }, done);
  }
], function(err) {
  if (err) {
    console.log(err);
  }
  mongoose.disconnect();
});
