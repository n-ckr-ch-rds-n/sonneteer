const randomWords = require('random-words');
const syllable = require('syllable');

module.exports = class LineGenerator {

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

    getTitle() {
        const titleLength = Math.floor(Math.random() * 5) + 1;
        const title = [];
        for (const position of Array(titleLength).keys()) {
            title.push(this.getRandomWord().toUpperCase());
        }
        return title.join(" ");
    }

    getRandomWord() {
        return randomWords();
    }

    countSyllables(lineArray) {
        return syllable(lineArray);
    }
}
