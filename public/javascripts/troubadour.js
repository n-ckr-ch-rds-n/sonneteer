const LineGenerator = require("./line-generator");
const RhymeGenerator = require("./rhyme-generator");

module.exports = class Troubadour {

    constructor(rhymeScheme, lineLength) {
        this.lineGenerator = new LineGenerator();
        this.rhymeGenerator = new RhymeGenerator();
        this.rhymeScheme = rhymeScheme;
        this.lineLength = lineLength;
    }

    composePoem() {
        const rhymeSets = this.rhymeGenerator.getRhymeSets(this.rhymeScheme);
        const poem = [];
        for (const rhyme of this.rhymeScheme.split("")) {
            const selector = Math.floor(Math.random() * rhymeSets[rhyme].length);
            const lineEndWord = rhymeSets[rhyme][selector];
            poem.push(this.lineGenerator.getLine(lineEndWord, this.lineLength));
        }
        return {title: this.lineGenerator.getTitle(), poem};
    }

}
