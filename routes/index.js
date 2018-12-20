var express = require('express');
var router = express.Router();
var Troubadour = require('../public/javascripts/troubadour.js');

router.get('/', function(req, res, next) {
  const troubadour = new Troubadour("ABAB", 5);
  const poem = troubadour.composePoem();
  res.render('index', { title: 'Troubadour', poem });
});

module.exports = router;
