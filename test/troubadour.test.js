const expect = require('chai').expect;
const syllable = require('syllable');
const Troubadour = require("../public/javascripts/troubadour");

describe('Troubadour', () => {

    let instance;

    beforeEach('Instantiate rhyme generator', () => {
        instance = new Troubadour();
    });


    describe('#composePoem(rhymeScheme, lineLength)', () => {
        it("Composes a poem with given rhyme scheme and line syllable count", () => {
            const poem = instance.composePoem("ABBA", 12);
            console.log(poem);
            expect(poem.poem.length).to.equal(4);
        })
    });

});
