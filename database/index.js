var mongoose = require('mongoose');
var express = require("express");
var app = express();
var config = require('./config');
// var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var cors = require('cors');
var path = require('path');
// var async = require('async');

mongoose.connect('mongodb://localhost/tutorial');

var Question = require('./lib/questions.js');
var Answer = require('./lib/answers.js');
var Lesson = require('./lib/lessons.js');

var corsOptions = {
  methods: ['GET', 'PUT', 'POST'],
  origin: 'http://localhost:5000',
  credentials: true
};

app.use(cors(corsOptions));


// app.use('/', routes);
// app.use('/castleTutorial', castleTutorial);

// This uses express-generated middleware that serves static files
// It looks for a directory at the path we pass in.
// If the url matches anything in the directory, it will be served
// Else: Next fires, and moves on to next handler;


app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/answers', function(req, res) {
  Answer.find({}, function(error, answers) {
    if (error) {
      console.error(error);
      res.sendStatus(404);
    }
    res.json(answers);
  })
});

app.get('/questions', function(req, res) {
  Question.find({}, function(error, questions) {
    if (error) {
      console.error(error);
      res.sendStatus(404);
    }
    res.json(questions);
  })
});

app.get('/lessons', function(req, res) {
  Lesson.find({}, function(error, lessons) {
    if (error) {
      console.error(error);
      res.sendStatus(404);
    }
    res.json(lessons);
  })
});

app.get('/tutorialCastle', function(req, res) {
  Lesson.find({
    "name": "Build A Castle"
  }, function(error, lessons) {
    if (error) {
      console.error(error);
      res.sendStatus(404);
    }
    res.json(lessons);
  })
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.log(err.message);
  console.error(err.stack);
  res.sendStatus(500);
});





app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(config.serverPort, function() {
  var host = server.address().address;
  var port = server.address().port;

  // %s is a place holder that we replace with 'host' and 'port'
  // it says where %s is, put the first argument, then replace the second %s with the second argument (host, port — are the two arguments)
  console.log("Example app listening at http://%s:%s", host, port);
});

module.exports = app;
