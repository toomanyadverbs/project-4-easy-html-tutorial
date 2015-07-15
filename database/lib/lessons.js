// var mongoose = require('./mongoose-tutorial.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = require('./questions.js');

var lessonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  questions: [{
    type: Schema.Types.ObjectId,
    ref: "Question"
  }],
});

var Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
