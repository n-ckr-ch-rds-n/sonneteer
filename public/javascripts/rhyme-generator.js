const rhymes = require('rhymes');
const AlexandrineGenerator = require("./alexandrine-generator");

module.exports = class RhymeGenerator {

    constructor() {
        this.alexandrineGenerator = new AlexandrineGenerator();
    }

    generateRhymes(wordToRhyme) {
        return rhymes(wordToRhyme).map(rhyme => rhyme.word);
    }

    getRhymeSets(rhymeScheme) {
        const wordsToRhyme = {};
        for (const rhyme of rhymeScheme.split("")) {
            const rhymeWord = this.alexandrineGenerator.getRandomWord();
            wordsToRhyme[rhyme] = this.generateRhymes(rhymeWord);
        }
        return wordsToRhyme;
    }

}
