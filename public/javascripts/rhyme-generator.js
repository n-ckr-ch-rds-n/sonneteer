const rhymes = require('rhymes');

class RhymeGenerator {
    static generateRhymes(wordToRhyme) {
        return rhymes(wordToRhyme).map(rhyme => rhyme.word);
    }
}

console.log(RhymeGenerator.generateRhymes("monkey"));
