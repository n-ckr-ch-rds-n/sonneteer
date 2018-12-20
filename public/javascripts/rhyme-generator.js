const rhymes = require('rhymes');
const LineGenerator = require("./line-generator");

module.exports = class RhymeGenerator {

    constructor() {
        this.lineGenerator = new LineGenerator();
    }

    generateRhymes(wordToRhyme) {
        return rhymes(wordToRhyme).map(rhyme => rhyme.word);
    }

    getRhymeSets(rhymeScheme) {
        const wordsToRhyme = {};
        for (const rhyme of rhymeScheme.split("")) {
            const rhymeWord = this.lineGenerator.getRandomWord();
            wordsToRhyme[rhyme] = this.generateRhymes(rhymeWord);
        }
        return wordsToRhyme;
    }

}
