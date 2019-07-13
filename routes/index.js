var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'โคคตรรรรรงง' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'อะเบ้าท์' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'ติดต่อชื่อชาร' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'โคคตรรรรรงง' });
});
module.exports = router;
