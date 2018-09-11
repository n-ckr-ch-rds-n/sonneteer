var syllable = require('syllable');
var randomWords = require('random-words');
var rhyme = require('rhyme');

module.exports = class Alexandrine {

  randomRhyme(word) {
    return new Promise ((resolve, reject) => {
      rhyme(function (r) {
        const rhymearray = r.rhyme(word);
        if (rhymearray.length >= 1) {
          const randomindex = (Math.floor(Math.random() * (rhymearray.length-1)));
          var rhymeword = rhymearray[randomindex].toLowerCase();
        } else {
          var rhymeword = word;
        }
        resolve(rhymeword);
        reject('Error');
      });
    })
  }

  syllableCount(arrayofstrings) {
    return syllable(arrayofstrings);
  }

  composeAlexandrine(wordtorhyme) {
    return new Promise((resolve, reject) => {
      let line = [];
      this.randomRhyme(wordtorhyme).then((rhymeword) => {
        let syllablestofill = 12-this.syllableCount(rhymeword);
        while (this.syllableCount(line) != syllablestofill) {
          if (this.syllableCount(line) < syllablestofill) {
            line.push(randomWords());
          }
          if (this.syllableCount(line) > syllablestofill) {
            line.splice(0, 1);
          }
        }
        line.push(rhymeword);
        line[0] = line[0].charAt(0).toUpperCase() + line[0].substr(1);
        resolve(line.join(' '));
      }).catch((error) => reject('Error'));
    })
  }
}
