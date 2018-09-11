var express = require('express');
var router = express.Router();
var Sonnet = require('../public/javascripts/sonnet.js');

const sonnet = new Sonnet();

/* GET home page. */
router.get('/', function(req, res, next) {
  sonnet.compose().then((sonnet) => {
    res.render('index', { title: 'Sonneteer', sonnet: sonnet });
  })
});

module.exports = router;
