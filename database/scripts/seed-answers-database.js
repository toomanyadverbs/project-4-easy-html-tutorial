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
      //------------ SKY COLOR -----------------
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
      //------------ GROUND COLOR -----------------
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
        //----------------WALL COLOR -----------------------------
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
      //---------------------- TOWERS COLOR -----------------------
      Answer.create({
        id: 1,
        questionId: 4,
        buttonStyle: 'background-color: darkgray;',
        buttonLabel: 'Dark Gray',
        editorHTML: '<div class="towersTwoFirst towerColor"></div>
  <div class="towersTwoSecond towerColor"></div>',
        editorCSS: '.towersTwoFirst {  position: absolute;  top: 25%;  bottom: 50%;  left: 30%; width: 4em;  z-index: 5;} .towersTwoSecond {  position: absolute;  top: 25%;  bottom: 50%;  right: 30%; width: 4em;  z-index: 5;} .towerColor{background-color: darkgray;}'
      }, done);
      Answer.create({
        id: 2,
        questionId: 4,
        buttonStyle: 'background-color: lightgray;',
        buttonLabel: 'Light Gray',
        editorHTML: '<div class="towersTwoFirst towerColor"></div>
  <div class="towersTwoSecond towerColor"></div>',
        editorCSS: '.towersTwoFirst {  position: absolute;  top: 25%;  bottom: 50%;  left: 30%; width: 4em;  z-index: 5;} .towersTwoSecond {  position: absolute;  top: 25%;  bottom: 50%;  right: 30%; width: 4em;  z-index: 5;} .towerColor{background-color: lightgray;}'
      }, done);
      Answer.create({
        id: 3,
        questionId: 4,
        buttonStyle: 'background-color: gold;',
        buttonLabel: 'Gold',
        editorHTML: '<div class="towersTwoFirst towerColor"></div>
  <div class="towersTwoSecond towerColor"></div>',
        editorCSS: '.towersTwoFirst {  position: absolute;  top: 25%;  bottom: 50%;  left: 30%; width: 4em;  z-index: 5;} .towersTwoSecond {  position: absolute;  top: 25%;  bottom: 50%;  right: 30%; width: 4em;  z-index: 5;} .towerColor{background-color: gold;}'
      }, done);
      Answer.create({
        id: 4,
        questionId: 4,
        buttonStyle: 'background-color: mediumpurple;',
        buttonLabel: 'Medium Purple',
        editorHTML: '<div class="towersTwoFirst towerColor"></div>
  <div class="towersTwoSecond towerColor"></div>',
        editorCSS: '.towersTwoFirst {  position: absolute;  top: 25%;  bottom: 50%;  left: 30%; width: 4em;  z-index: 5;} .towersTwoSecond {  position: absolute;  top: 25%;  bottom: 50%;  right: 30%; width: 4em;  z-index: 5;} .towerColor{background-color: mediumpurple;}'
      }, done);
      Answer.create({
        id: 5,
        questionId: 4,
        buttonStyle: 'background-color: aquamarine;',
        buttonLabel: 'Aquamarine',
        editorHTML: '<div class="towersTwoFirst towerColor"></div>
  <div class="towersTwoSecond towerColor"></div>',
        editorCSS: '.towersTwoFirst {  position: absolute;  top: 25%;  bottom: 50%;  left: 30%; width: 4em;  z-index: 5;} .towersTwoSecond {  position: absolute;  top: 25%;  bottom: 50%;  right: 30%; width: 4em;  z-index: 5;} .towerColor{background-color: aquamarine;}'
      }, done);
      //-------------TOWER TOPS SHAPE---------------------
      Answer.create({
        id: 1,
        questionId: 5,
        buttonStyle: 'background-color: darkgray;',
        buttonLabel: 'Square',
        editorHTML: '<div class="towerTopsFirst towerTopColor"></div> <div class="towerTopsSecond towerTopColor"></div>',
        editorCSS: '.towerTopsFirst {  position: absolute;  top: 20%;  bottom: 65%;  left: 28%;  width: 5em;  background-color: darkgray; z-index:6;} .towerTopsSecond {  position: absolute;  top: 20%;  bottom: 65%;  right: 28%;  width: 5em;  background-color: darkgray; z-index:6;}'
      }, done);
      Answer.create({
        id: 2,
        questionId: 5,
        buttonStyle: 'background-color: darkgray; border-radius: 2.5em;',
        buttonLabel: 'Round',
        editorHTML: '<div class="towerTopsFirst towerTopColor"></div> <div class="towerTopsSecond towerTopColor"></div>',
        editorCSS: '.towerTopsFirst {  position: absolute;  top: 20%;  bottom: 65%;  left: 28%;  width: 5em;  background-color: darkgray; border-radius: 2.5em; z-index:6;} .towerTopsSecond {  position: absolute;  top: 20%;  bottom: 65%;  right: 28%;  width: 5em;  background-color: darkgray; border-radius: 2.5em; z-index:6;}'
      }, done);
      Answer.create({
        id: 3,
        questionId: 5,
        buttonStyle: 'background-color: darkgray; border-top-left-radius: 2.5em;  border-top-right-radius: 2.5em;',
        buttonLabel: 'Mushroom',
        editorHTML: '<div class="towerTopsFirst towerTopColor"></div> <div class="towerTopsSecond towerTopColor"></div>',
        editorCSS: '.towerTopsFirst {  position: absolute;  top: 20%;  bottom: 65%;  left: 28%;  width: 5em;  background-color: darkgray; border-top-left-radius: 2.5em;  border-top-right-radius: 2.5em;  z-index:6;} .towerTopsSecond {  position: absolute;  top: 20%;  bottom: 65%;  right: 28%;  width: 5em;  background-color: darkgray; border-top-left-radius: 20px;  border-top-right-radius: 20px;  z-index:6;}'
      }, done);
      Answer.create({
        id: 4,
        questionId: 5,
        buttonStyle: 'background-color: darkgray; border-top: 10px dotted cyan;',
        buttonLabel: 'Crenellated and Square',
        editorHTML: '<div class="towerTopsFirst towerTopColor"></div> <div class="towerTopsSecond towerTopColor"></div>',
        editorCSS: '.towerTopsFirst {  position: absolute;  top: 20%;  bottom: 65%;  left: 28%;  width: 5em;  background-color: darkgray; border-top: 10px dotted cyan; z-index:6;} .towerTopsSecond {  position: absolute;  top: 20%;  bottom: 65%;  right: 28%;  width: 5em;  background-color: darkgray; border-top: 10px dotted cyan; z-index:6;}'
      }, done);
      Answer.create({
        id: 5,
        questionId: 5,
        buttonStyle: 'background-color: darkgray; border-top: 10px dotted cyan;  border-bottom-left-radius: 20px;  border-bottom-right-radius: 20px;',
        buttonLabel: 'Crenellated and Rounded',
        editorHTML: '<div class="towerTopsFirst towerTopColor"></div> <div class="towerTopsSecond towerTopColor"></div>',
        editorCSS: '.towerTopsFirst {  position: absolute;  top: 20%;  bottom: 65%;  left: 28%;  width: 5em;  background-color: darkgray; border-top: 10px dotted cyan;  border-bottom-left-radius: 20px;  border-bottom-right-radius: 20px;  z-index:6;} .towerTopsSecond {  position: absolute;  top: 20%;  bottom: 65%;  right: 28%;  width: 5em;  background-color: darkgray; border-top: 10px dotted cyan;  border-bottom-left-radius: 20px;  border-bottom-right-radius: 20px;  z-index:6;}'
      }, done);
      //------------- TOWER TOPS COLOR ---------------------
      Answer.create({
        id: 1,
        questionId: 6,
        buttonStyle: 'background-color: navy;',
        buttonLabel: 'Dark Gray',
        editorHTML: '',
        editorCSS: '.towerTopColor { background-color: darkgray; }'
      }, done);
      Answer.create({
        id: 2,
        questionId: 6,
        buttonStyle: 'background-color: Light Gray;',
        buttonLabel: 'Light Gray',
        editorHTML: '',
        editorCSS: '.towerTopColor { background-color: lightgray; }'
      }, done);
      Answer.create({
        id: 3,
        questionId: 6,
        buttonStyle: 'background-color: gold;',
        buttonLabel: 'Gold',
        editorHTML: '',
        editorCSS: '.towerTopColor { background-color: gold; }'
      }, done);
      Answer.create({
        id: 4,
        questionId: 6,
        buttonStyle: 'background-color: mediumpurple;',
        buttonLabel: 'Medium Purple',
        editorHTML: '',
        editorCSS: '.towerTopColor { background-color: mediumpurple; }'
      }, done);
      Answer.create({
        id: 5,
        questionId: 6,
        buttonStyle: 'background-color: aquamarine;',
        buttonLabel: 'Aquamarine',
        editorHTML: '',
        editorCSS: '.towerTopColor { background-color: aquamarine; }'
      }, done);
      //------------- DOOR COLOR ---------------------
      Answer.create({
        id: 1,
        questionId: 7,
        buttonStyle: 'background-color: darkslateblue;',
        buttonLabel: 'Dark Slate Blue',
        editorHTML: '<div class="door"></div>',
        editorCSS: '.door {  position: absolute;  top: 70%;  bottom: 20%;  right: 45%;  background-color: darkslateblue;  width: 3em;  border-top: 2px dotted goldenrod;  border-left: 2px dotted goldenrod;  border-right: 2px dotted goldenrod;  border-top-left-radius: 20px;  border-top-right-radius: 20px;  z-index: 7;}'
      }, done);
      Answer.create({
        id: 2,
        questionId: 7,
        buttonStyle: 'background-color: crimson;',
        buttonLabel: 'Crimson',
        editorHTML: '<div class="door"></div>',
        editorCSS: '.door {  position: absolute;  top: 70%;  bottom: 20%;  right: 45%;  background-color: crimson;  width: 3em;  border-top: 2px dotted goldenrod;  border-left: 2px dotted goldenrod;  border-right: 2px dotted goldenrod;  border-top-left-radius: 20px;  border-top-right-radius: 20px;  z-index: 7;}'
      }, done);
      Answer.create({
        id: 3,
        questionId: 7,
        buttonStyle: 'background-color: seagreen;',
        buttonLabel: 'Sea Green',
        editorHTML: '<div class="door"></div>',
        editorCSS: '.door {  position: absolute;  top: 70%;  bottom: 20%;  right: 45%;  background-color: seagreen;  width: 3em;  border-top: 2px dotted goldenrod;  border-left: 2px dotted goldenrod;  border-right: 2px dotted goldenrod;  border-top-left-radius: 20px;  border-top-right-radius: 20px;  z-index: 7;}'
      }, done);
      Answer.create({
        id: 4,
        questionId: 7,
        buttonStyle: 'background-color: dark goldenrod;',
        buttonLabel: 'Dark Goldenrod',
        editorHTML: '<div class="door"></div>',
        editorCSS: '.door {  position: absolute;  top: 70%;  bottom: 20%;  right: 45%;  background-color: darkgoldenrod;  width: 3em;  border-top: 2px dotted goldenrod;  border-left: 2px dotted goldenrod;  border-right: 2px dotted goldenrod;  border-top-left-radius: 20px;  border-top-right-radius: 20px;  z-index: 7;}'
      }, done);
      Answer.create({
        id: 5,
        questionId: 7,
        buttonStyle: 'background-color: midnightblue;',
        buttonLabel: 'Midnight Blue',
        editorHTML: '<div class="door"></div>',
        editorCSS: '.door {  position: absolute;  top: 70%;  bottom: 20%;  right: 45%;  background-color: midnightblue;  width: 3em;  border-top: 2px dotted goldenrod;  border-left: 2px dotted goldenrod;  border-right: 2px dotted goldenrod;  border-top-left-radius: 20px;  border-top-right-radius: 20px;  z-index: 7;}'
      }, done);
      //------------- BANNER COLOR ---------------------
      Answer.create({
        id: 1,
        questionId: 8,
        buttonStyle: 'background-color: darkslateblue;',
        buttonLabel: 'Dark Slate Blue',
        editorHTML: '<div class="banner">Fort Unicornfart</div>',
        editorCSS: '.banner {  position: absolute;  top: 60%;  left: 30%;  right: 30%;  background-color: darkslateblue;  font-family:cursive;  color: goldenrod;  padding: .2em 1em 0em 1em;  text-align: center;  height: 2em;  z-index: 7;  border: goldenrod 2px dashed;}'
      }, done);
      Answer.create({
        id: 2,
        questionId: 8,
        buttonStyle: 'background-color: crimson;',
        buttonLabel: 'Crimson',
        editorHTML: '<div class="banner">Fort Unicornfart</div>',
        editorCSS: '.banner {  position: absolute;  top: 60%;  left: 30%;  right: 30%;  background-color: crimson;  font-family:cursive;  color: goldenrod;  padding: .2em 1em 0em 1em;  text-align: center;  height: 2em;  z-index: 7;  border: goldenrod 2px dashed;}'
      }, done);
      Answer.create({
        id: 3,
        questionId: 8,
        buttonStyle: 'background-color: seagreen;',
        buttonLabel: 'Sea Green',
        editorHTML: '<div class="banner">Fort Unicornfart</div>',
        editorCSS: '.banner {  position: absolute;  top: 60%;  left: 30%;  right: 30%;  background-color: seagreen;  font-family:cursive;  color: goldenrod;  padding: .2em 1em 0em 1em;  text-align: center;  height: 2em;  z-index: 7;  border: goldenrod 2px dashed;}'
      }, done);
      Answer.create({
        id: 4,
        questionId: 8,
        buttonStyle: 'background-color: darkgoldenrod;',
        buttonLabel: 'Dark Goldenrod',
        editorHTML: '<div class="banner">Fort Unicornfart</div>',
        editorCSS: '.banner {  position: absolute;  top: 60%;  left: 30%;  right: 30%;  background-color: darkgoldenrod;  font-family:cursive;  color: goldenrod;  padding: .2em 1em 0em 1em;  text-align: center;  height: 2em;  z-index: 7;  border: goldenrod 2px dashed;}'
      }, done);
      Answer.create({
        id: 5,
        questionId: 8,
        buttonStyle: 'background-color: midnightblue;',
        buttonLabel: 'Midnight Blue',
        editorHTML: '<div class="banner">Fort Unicornfart</div>',
        editorCSS: '.banner {  position: absolute;  top: 60%;  left: 30%;  right: 30%;  background-color: midnightblue;  font-family:cursive;  color: goldenrod;  padding: .2em 1em 0em 1em;  text-align: center;  height: 2em;  z-index: 7;  border: goldenrod 2px dashed;}'
      }, done);
      //-------------THE END---------------------------
      Answer.create({
        id: 1,
        questionId: 9,
        buttonStyle: '',
        buttonLabel: '',
        editorHTML: '',
        editorCSS: ''
      }, done);
    }
  ],
  function(err) {
    if (err) {
      console.log(err);
    }
    mongoose.disconnect();
  });
