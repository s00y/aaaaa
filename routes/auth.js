var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../schemas/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('login or join page');
});

router.post('/signup', function(req, res, next){
   Users.create({
       username: req.body.username,
       email: req.body.email,
       password: req.body.password
   }).then( result => {
    res.send('successed signup');
    })
    .catch( err => {
        console.log(err)
    })
});

router.post('/login', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    console.log(email);
    console.log(Users.email);
  if(email === Users.email && password === Users.password) {
      res.send('hi');
  } else {
      res.send('who r u');
  }
});

router.get('/logout', function(req, res, next) {
      res.redirect('../../');
});

module.exports = router;