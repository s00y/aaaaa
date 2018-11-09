var express = require('express');
var router = express.Router();
var Users = require('../schemas/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  // var username = exampleData.username;
  res.send(`Hello ${Users.username}!`); 
});

module.exports = router;

