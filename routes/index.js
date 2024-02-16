var express = require('express');
var router = express.Router();

const ROOT_URL = 'https://catfact.ninja/fact'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cat Facts' });
});

// router.get('/cat/fact', ROOT_URL)

module.exports = router;
