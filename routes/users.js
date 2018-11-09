var express = require('express');
var router = express.Router();

var exampleData = {
  username:'soo',
  email:'s00_y@naver.com',
  password:'1234'
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/workspace', function(req, res, next) {
  res.send('workspace list');
});

router.get('/username', function(req, res, next) {
  res.send('personal page');
});

module.exports = router;
