var express = require('express');
var router = express.Router();
var Sonneteer = require('../public/javascripts/sonneteer.js');

router.get('/', function(req, res, next) {
  const sonneteer = new Sonneteer("ABAB", 5);
  const sonnet = sonneteer.composeSonnet();
  res.render('index', { title: 'Sonneteer', sonnet: sonnet });
});

module.exports = router;
