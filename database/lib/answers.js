// var mongoose = require('./mongoose-tutorial.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  questionId: {
    type: Number,
    required: true
  },
  buttonStyle: {
    type: String
  },
  buttonLabel: {
    type: String,
    required: true
  },
  editorHTML: {
    type: String,
    required: true
  },
  editorCSS: {
    type: String,
    required: true
  }
});

var Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
