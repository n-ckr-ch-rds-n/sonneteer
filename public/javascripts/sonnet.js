var Alexandrine = require('./alexandrine.js');
var randomWords = require('random-words');

module.exports = class Sonnet {
  constructor(linemodel = new Alexandrine()) {
    this._linemodel = linemodel;
    this._rhymeA = randomWords();
    this._rhymeB = randomWords();
    this._rhymeC = randomWords();
    this._rhymeD = randomWords();
  }

  getTitle() {
    const title = [];
    const titlefirstword = randomWords();
    const titlesecondword = randomWords();
    const titlethirdword = randomWords();
    title.push(titlefirstword.toUpperCase());
    title.push(titlesecondword.toUpperCase());
    title.push(titlethirdword.toUpperCase());
    return title.join(' ');
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
    const title = this.getTitle();
    sonnet.push(title);
    const firstquatrain = await this.quatrain();
    const secondquatrain = await this.quatrain();
    const tercets = await this.tercets();
    sonnet.push(firstquatrain);
    sonnet.push(secondquatrain);
    sonnet.push(tercets);
    return sonnet;
  }
}
