const expect = require('chai').expect;
const syllable = require('syllable');
const LineGenerator = require("../public/javascripts/line-generator");

describe('LineGenerator', () => {

    let instance;

    beforeEach('Instantiate line generator', () => {
        instance = new LineGenerator();
    });

    describe('#getLine(lineEndWord, lineLength)', () => {

        it('Generates a line with a given number of syllables', () => {
            for (const lineLength of Array(100).keys()) {
                if (lineLength > 0) {
                    const line = instance.getLine("foo", lineLength);
                    expect(syllable(line)).to.equal(lineLength)
                }
            }
        });

        it("Makes the given string the last word in the line", () => {
            const splitLine = instance.getLine("foo", 10).split(" ");
            expect(splitLine[splitLine.length - 1]).to.equal("foo");
        })


    });

    describe('#getTitle()', () => {

        it('Generates a poem title with a random length', () => {
            const title = instance.getTitle();
            expect(title).to.be.a.string;

            const testTitles = [];
            for (const i of Array(100).keys()) {
                testTitles.push(instance.getTitle());
            }
            expect(testTitles.some(testTitle => testTitle.length !== title.length)).to.equal(true);
        })

    })

});
