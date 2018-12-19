const AlexandrineGenerator = require("./alexandrine-generator");
const RhymeGenerator = require("./rhyme-generator");

class Sonneteer {

    constructor(rhymeScheme, lineLength) {
        this.alexandrineGenerator = new AlexandrineGenerator();
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
            sonnet.push(this.alexandrineGenerator.getLine(lineEndWord, this.lineLength));
        }
        return sonnet;
    }

}

const sonneteer = new Sonneteer("12345667", 5);
console.log(sonneteer.composeSonnet());
