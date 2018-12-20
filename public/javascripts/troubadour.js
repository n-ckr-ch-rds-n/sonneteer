const LineGenerator = require("./line-generator");
const RhymeGenerator = require("./rhyme-generator");

module.exports = class Troubadour {

    constructor(rhymeScheme, lineLength) {
        this.lineGenerator = new LineGenerator();
        this.rhymeGenerator = new RhymeGenerator();
    }

    composePoem(rhymeScheme, lineLength) {
        const rhymeSets = this.rhymeGenerator.getRhymeSets(rhymeScheme);
        const poem = [];
        for (const rhyme of rhymeScheme.split("")) {
            const selector = Math.floor(Math.random() * rhymeSets[rhyme].length);
            const lineEndWord = rhymeSets[rhyme][selector];
            poem.push(this.lineGenerator.getLine(lineEndWord, lineLength));
        }
        return {title: this.lineGenerator.getTitle(), poem};
    }

}
