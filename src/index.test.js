import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our fisrt test', () => {
  it('Should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.htm', () => {
  it('should say hello world', (done) => {
    const index = fs.readFileSync('./src/index.htm', 'utf-8');
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users');
      done();
      window.close();
    })
  });
});
