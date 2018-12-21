const expect = require('chai').expect;
const syllable = require('syllable');
const RhymeGenerator = require("../public/javascripts/rhyme-generator");

describe('RhymeGenerator', () => {

    let instance;

    beforeEach('Instantiate rhyme generator', () => {
        instance = new RhymeGenerator();
    });

    describe('#generateRhymes()', () => {

        it('Generates an array of rhymes for a given word', () => {
            const rhymes = instance.generateRhymes("foo");
            expect(rhymes).to.be.a('array');

        })

    });

    describe('#getRhymeSets()', () => {

        it('Generates an object containing a list of rhymes for each rhyme in the rhyme scheme', () => {
            const rhymeSets = instance.getRhymeSets("AB");
            expect(rhymeSets.A).to.be.a('array');
            expect(rhymeSets.B).to.be.a('array');

            expect(Object.keys(rhymeSets)).to.deep.equal(["A", "B"]);

            for (const scheme of Object.keys(rhymeSets)) {
                for (const rhyme of rhymeSets[scheme]) {
                    expect(rhyme).to.be.a('string');
                }
            }
        })

    });

});
