const express = require('express');
const router = express.Router();
const Troubadour = require('../public/javascripts/troubadour.js');
const troubadour = new Troubadour();
const defaultRhymeScheme = "ABBAABBACDCDCC";
const defaultLineLength = 12;


router.get('/', function(req, res, next) {
  const rhymeScheme = defaultRhymeScheme;
  const lineLength = defaultLineLength;
  const poem = troubadour.composePoem(rhymeScheme, 12);
  res.render('index', { title: 'Troubadour', poem, rhymeScheme, lineLength });
});

router.post('/', function(req, res, next) {
    const rhymeScheme = req.body.rhyme_scheme;
    const lineLength = parseInt(req.body.line_length);
    const poem = troubadour.composePoem(rhymeScheme, lineLength);
    res.render('index', { title: 'Troubadour', poem, rhymeScheme, lineLength });
});

module.exports = router;
