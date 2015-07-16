var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var Answer = require('../lib/answers.js');

router.get('/', function(req, res) {
  Answer.find({}, function(err, lesson) {
    if (err) {
      res.sendStatus(404);
    }
    res.json(lesson);
    res.status(200);
  });
});

router.get('/:id', function(req, res) {
  Book.findOne({
    _id: req.params.id
  }, function(err, book) {
    console.log(book);
    if (err) {
      console.log(err);
      set.sendStatus(404);
    }
    res.render('book-view', {
      book: book
    });
  });
});

router.post('/', jsonParser);
router.post('/', function(req, res) {
  Book.create(req.body, function(error, book) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      fs.readFile('./views/book.jade', 'utf8', function(err, data) {
        if (err) {
          console.log(err);
          res.sendStatus(400);
        } else {
          var userCompiler = jade.compile(data);
          var html = userCompiler(book);
          res.send(html);
          res.status(200);
        }
      });
    }
  });
});

router.patch('/:id', jsonParser);
router.patch('/:id', bodyParser());
router.patch('/:id', function(req, res) {
  Book.findByIdAndUpdate(req.params.id, req.body, function(error, book) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/:id', function(req, res) {
  Book.findOneAndRemove({
    _id: req.params.id
  }, function(error, ghost) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.send({
        _id: ghost._id,
        type: 'book'
      });
      res.status(204);
    }
  });
});

// router.get('/', function(req, res){
//   res.send("It worked!");
// });

// router.post('/', function(req, res){
//   res.send('post worked!');
// });

// router.route('/:book_id')
//   .all(function(req, res, next) {
//     contact_id = req.params.book_id;
//     next();
//   })
//   .get(function(req, res){
//     res.send("Hello " + book_id);
//   })
//   .post(function(req, res){
//     res.send('Post for contact ' + book_id);
//   })
//   .put(function(req, res){
//     res.send('Put for contact ' + book_id);
//   })
//   .delete(function(req, res){
//     res.send('book number ' + book_id + " " + "has been deleted!");
//   });


module.exports = router;
