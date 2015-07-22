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
      questionId: 1,
      buttonStyle: 'background-color: cyan;',
      buttonLabel: 'Cyan',
      editorHTML: '<div class="sky"></div>',
      editorCSS: '.sky {position: absolute; top: 0px; width: 100%; height: 70%; background-color: cyan; z-index:2;}'
    }, done);
    Answer.create({
      id: 2,
      questionId: 1,
      buttonStyle: 'background-color: cyan;',
      buttonLabel: 'Cyan',
      editorHTML: '<div class="sky"></div>',
      editorCSS: '.sky {position: absolute; top: 0px; width: 100%; height: 70%; background-color: cyan; z-index:2;}'
    }, done);
    Answer.create({
      id: 3,
      questionId: 1,
      buttonStyle: 'background-color: cyan;',
      buttonLabel: 'Cyan',
      editorHTML: '<div class="sky"></div>',
      editorCSS: '.sky {position: absolute; top: 0px; width: 100%; height: 70%; background-color: cyan; z-index:2;}'
    }, done);
    Answer.create({
      id: 5,
      questionId: 1,
      buttonStyle: 'background-color: cyan;',
      buttonLabel: 'Cyan',
      editorHTML: '<div class="sky"></div>',
      editorCSS: '.sky {position: absolute; top: 0px; width: 100%; height: 70%; background-color: cyan; z-index:2;}'
    }, done);
        }, done);
    Answer.create({
      id: 1,
      questionId: 2,
      buttonStyle: 'background-color: darkgreen;',
      buttonLabel: 'Dark Green',
      editorHTML: '<div class="ground"></div>',
      editorCSS: '.ground {position: absolute; top: 70%; width: 100%; height: 30%; background-color: darkgreen; z-index: 3;}'
    }, done);
    Answer.create({
      id: 2,
      questionId: 2,
      buttonStyle: 'background-color: limegreen;',
      buttonLabel: 'Lime Green',
      editorHTML: '<div class="ground"></div>',
      editorCSS: '.ground {position: absolute; top: 70%; width: 100%; height: 30%; background-color: limegreen; z-index: 3;}'
    }, done);
    Answer.create({
      id: 3,
      questionId: 2,
      buttonStyle: 'background-color: teal;',
      buttonLabel: 'Teal',
      editorHTML: '<div class="ground"></div>',
      editorCSS: '.ground {position: absolute; top: 70%; width: 100%; height: 30%; background-color: teal; z-index: 3;}'
    }, done);
    Answer.create({
      id: 4,
      questionId: 2,
      buttonStyle: 'background-color: burlywood;',
      buttonLabel: 'Burly Wood Brown',
      editorHTML: '<div class="ground"></div>',
      editorCSS: '.ground {position: absolute; top: 70%; width: 100%; height: 30%; background-color: burlywood; z-index: 3;}'
    }, done);
    Answer.create({
      id: 5,
      questionId: 2,
      buttonStyle: 'background-color: aliceblue;',
      buttonLabel: 'Alice Blue',
      editorHTML: '<div class="ground"></div>',
      editorCSS: '.ground {position: absolute; top: 70%; width: 100%; height: 30%; background-color: aliceblue; z-index: 3;}'
    }, done);
    Answer.create({
      id: 1,
      questionId: 3,
      buttonStyle: 'background-color: darkgray;',
      buttonLabel: 'Dark Gray',
      editorHTML: '<div class="wall"></div>',
      editorCSS: '.wall {position: absolute; top: 50%; left: 25%; right: 25%; bottom: 20%; background-color: darkgray; z-index: 4;}'
    }, done);
    Answer.create({
      id: 2,
      questionId: 3,
      buttonStyle: 'background-color: lightgray;',
      buttonLabel: 'Light Gray',
      editorHTML: '<div class="wall"></div>',
      editorCSS: '.wall {position: absolute; top: 50%; left: 25%; right: 25%; bottom: 20%; background-color: lightgray; z-index: 4;}'
    }, done);
    Answer.create({
      id: 3,
      questionId: 3,
      buttonStyle: 'background-color: gold;',
      buttonLabel: 'Gold',
      editorHTML: '<div class="wall"></div>',
      editorCSS: '.wall {position: absolute; top: 50%; left: 25%; right: 25%; bottom: 20%; background-color: gold; z-index: 4;}'
    }, done);
    Answer.create({
      id: 4,
      questionId: 3,
      buttonStyle: 'background-color: mediumpurple;',
      buttonLabel: 'Medium Purple',
      editorHTML: '<div class="wall"></div>',
      editorCSS: '.wall {position: absolute; top: 50%; left: 25%; right: 25%; bottom: 20%; background-color: mediumpurple; z-index: 4;}'
    }, done);
    Answer.create({
      id: 5,
      questionId: 3,
      buttonStyle: 'background-color: aquamarine;',
      buttonLabel: 'Aquamarine',
      editorHTML: '<div class="wall"></div>',
      editorCSS: '.wall {position: absolute; top: 50%; left: 25%; right: 25%; bottom: 20%; background-color: aquamarine; z-index: 4;}'
    }, done);
    //---------------------- DONE UP TIL HERE
    Answer.create({
      id: 1,
      questionId: 4,
      buttonStyle: 'background-color: darkgray;',
      buttonLabel: 'Dark Gray',
      editorHTML: '<div class="towersTwoFirst towerColor"></div>
  <div class="towersTwoSecond towerColor"></div>',
      editorCSS: '.towersTwoFirst {  position: absolute;  top: 25%;  bottom: 50%;  left: 30%;  background-color: darkgray;  width: 4em;  z-index: 5;} .towersTwoSecond {  position: absolute;  top: 25%;  bottom: 50%;  right: 30%;  background-color: darkgray;  width: 4em;  z-index: 5;} .towerColor{background-color: darkgray;}'
    }, done);
    Answer.create({
      id: 1,
      questionId: 5,
      buttonStyle: 'background-color: darkgray; border-top: 10px dotted cyan;  border-bottom-left-radius: 20px;  border-bottom-right-radius: 20px;',
      buttonLabel: 'Crenellated',
      editorHTML: '<div class="towerTopsFirst towerTopColor"></div> <div class="towerTopsSecond towerTopColor"></div>',
      editorCSS: '.towerTopsFirst {  position: absolute;  top: 20%;  bottom: 65%;  left: 28%;  width: 5em;  background-color: darkgray; border-top: 10px dotted cyan;  border-bottom-left-radius: 20px;  border-bottom-right-radius: 20px;  z-index:6;} .towerTopsSecond {  position: absolute;  top: 20%;  bottom: 65%;  right: 28%;  width: 5em;  background-color: darkgray; border-top: 10px dotted cyan;  border-bottom-left-radius: 20px;  border-bottom-right-radius: 20px;  z-index:6;}'
    }, done);
    Answer.create({
      id: 1,
      questionId: 6,
      buttonStyle: 'background-color: navy;',
      buttonLabel: 'Dark Gray',
      editorHTML: '',
      editorCSS: '.towerTopsColor { background-color: darkgray; }'
    }, done);
    Answer.create({
      id: 1,
      questionId: 7,
      buttonStyle: 'background-color: darkslateblue;',
      buttonLabel: 'Dark Slate Blue',
      editorHTML: '',
      editorCSS: '.door {  position: absolute;  top: 70%;  bottom: 20%;  right: 45%;  background-color: darkslateblue;  width: 3em;  border-top: 2px dotted goldenrod;  border-left: 2px dotted goldenrod;  border-right: 2px dotted goldenrod;  border-top-left-radius: 20px;  border-top-right-radius: 20px;  z-index: 7;}'
    }, done);
    Answer.create({
      id: 1,
      questionId: 8,
      buttonStyle: 'background-color: darslateblue;',
      buttonLabel: 'Dark Slate Blue',
      editorHTML: '<div class="banner">Fort Unicornfart</div>',
      editorCSS: '.banner {  position: absolute;  top: 60%;  left: 30%;  right: 30%;  background-color: darkslateblue;  font-family:cursive;  color: darkgoldenrod;  padding: .2em 1em 0em 1em;  text-align: center;  height: 2em;  z-index: 7;  border: darkgoldenrod 2px dashed;}'
    }, done);
    Answer.create({
      id: 1,
      questionId: 9,
      buttonStyle: '',
      buttonLabel: '',
      editorHTML: '',
      editorCSS: ''
    }, done);
  }
], function(err) {
  if (err) {
    console.log(err);
  }
  mongoose.disconnect();
});
