const randomWords = require('random-words');
const syllable = require('syllable');

module.exports = class AlexandrineGenerator {

    getLine(lineEndWord, lineLength) {
        let line = [lineEndWord];
        do { if (this.countSyllables(line) < lineLength) {
                line.unshift(this.getRandomWord());
            } else if (this.countSyllables(line) > lineLength) {
                line.shift();
            } }
        while(this.countSyllables(line) !== lineLength);
        line[0] = line[0].charAt(0).toUpperCase() + line[0].substr(1);
        return line.map(word => word.replace(/[^a-z]/gi, '')).join(" ");
    }

    getRandomWord() {
        return randomWords();
    }

    countSyllables(lineArray) {
        return syllable(lineArray);
    }
}
