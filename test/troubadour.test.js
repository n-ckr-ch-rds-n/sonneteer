const expect = require('chai').expect;
const syllable = require('syllable');
const Troubadour = require("../public/javascripts/troubadour");

describe('Troubadour', () => {
    let instance;
    let poem;

    beforeEach('Instantiate rhyme generator and generate poem', () => {
        instance = new Troubadour();
        poem = instance.composePoem("ABBA", 12);
    });


    describe('#composePoem(rhymeScheme, lineLength)', () => {
        it("Composes a poem with given rhyme scheme", () => {
            expect(poem.poem.length).to.equal(4);
        });

        it("Composes a poem in which all the lines have the syllable count", () => {
            for (const line of poem.poem) {
                expect(syllable(line)).to.equal(12);
            }
        });

        it("Sets a title for the poem", () => {
            expect(poem.title).to.be.a('string');
        });

        it("The title's length is randomly generated", () => {
            const comparisonTitles = [];
            for (const key of Array(3).keys()) {
                const comparisonPoem = instance.composePoem("ABBA", 12);
                comparisonTitles.push(comparisonPoem.title);
            }
            expect(comparisonTitles.some(title => title.length !== poem.title.length)).to.equal(true);
        });
    });

});
