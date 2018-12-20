const LineGenerator = require("./alexandrine-generator");
const RhymeGenerator = require("./rhyme-generator");

module.exports = class Sonneteer {

    constructor(rhymeScheme, lineLength) {
        this.lineGenerator = new LineGenerator();
        this.rhymeGenerator = new RhymeGenerator();
        this.rhymeScheme = rhymeScheme;
        this.lineLength = lineLength;
    }

    composeSonnet() {
        const rhymeSets = this.rhymeGenerator.getRhymeSets(this.rhymeScheme);
        const sonnet = [];
        for (const rhyme of this.rhymeScheme.split("")) {
            const selector = Math.floor(Math.random() * rhymeSets[rhyme].length);
            const lineEndWord = rhymeSets[rhyme][selector];
            sonnet.push(this.lineGenerator.getLine(lineEndWord, this.lineLength));
        }
        return sonnet;
    }

}