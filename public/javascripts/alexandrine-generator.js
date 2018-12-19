const randomWords = require('random-words');
const syllable = require('syllable');

class AlexandrineGenerator {

    getLine(lineEnd, lineLength) {
        let line = [lineEnd];
        do { if (this.countSyllables(line) < lineLength) {
                line.unshift(this.getRandomWord());
            } else if (this.countSyllables(line) > lineLength) {
                line.shift();
            } }
        while(this.countSyllables(line) !== lineLength);
        return line;
    }

    getRandomWord() {
        return randomWords();
    }

    countSyllables(lineArray) {
        return syllable(lineArray);
    }
}

const ag = new AlexandrineGenerator();
console.log(ag.getLine("log", 12));
