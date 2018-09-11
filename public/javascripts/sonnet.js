var Alexandrine = require('./alexandrine.js');
var randomWords = require('random-words');

class Sonnet {
  constructor(linemodel = new Alexandrine()) {
    this._linemodel = linemodel;
    this._rhymeA = randomWords();
    this._rhymeB = randomWords();
    this._rhymeC = randomWords();
    this._rhymeD = randomWords();
  }

  async quatrain() {
    const quatrain = [];
    const line1 = await this._linemodel.composeAlexandrine(this._rhymeA);
    const line2 = await this._linemodel.composeAlexandrine(this._rhymeB);
    const line3 = await this._linemodel.composeAlexandrine(this._rhymeB);
    const line4 = await this._linemodel.composeAlexandrine(this._rhymeA);
    quatrain.push(line1);
    quatrain.push(line2);
    quatrain.push(line3);
    quatrain.push(line4);
    return quatrain;
  }

  async tercets() {
    const tercets = [];
    const line1 = await this._linemodel.composeAlexandrine(this._rhymeC);
    const line2 = await this._linemodel.composeAlexandrine(this._rhymeD);
    const line3 = await this._linemodel.composeAlexandrine(this._rhymeC);
    const line4 = await this._linemodel.composeAlexandrine(this._rhymeC);
    const line5 = await this._linemodel.composeAlexandrine(this._rhymeD);
    const line6 = await this._linemodel.composeAlexandrine(this._rhymeD);
    tercets.push(line1);
    tercets.push(line2);
    tercets.push(line3);
    tercets.push(line4);
    tercets.push(line5);
    tercets.push(line6);
    return tercets;
  }

  async compose() {
    const sonnet = [];
    const firstquatrain = await this.quatrain();
    const secondquatrain = await this.quatrain();
    const tercets = await this.tercets();
    sonnet.push(firstquatrain);
    sonnet.push(secondquatrain);
    sonnet.push(tercets);
    console.log(sonnet);
    return sonnet;
  }
}

var sonnet = new Sonnet();

sonnet.compose();
