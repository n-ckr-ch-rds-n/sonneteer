var express = require('express');
var router = express.Router();
var Sonnet = require('../public/javascripts/sonnet.js');

router.get('/', function(req, res, next) {
  const sonnet = new Sonnet();
  sonnet.compose().then((sonnet) => {
    res.render('index', { title: 'Sonneteer', sonnet: sonnet });
  })
});

module.exports = router;
