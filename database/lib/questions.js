// var mongoose = require('./mongoose-tutorial.js');

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/tutorial');

var Answer = require('./answers.js');

var Schema = mongoose.Schema;

var questionSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  answerOptions: [{
    type: Schema.Types.ObjectId,
    ref: "Answer"
  }],
  questionPosition: {
    type: Number,
    required: true
  },
  nextQuestionId: {
    type: Number,
    required: true
  }
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;
