const mdLinks = require('../lib/mdlinks');


describe('mdLinks', () => {

  it('Resolve promise', () => {
    const filePath = './examples/readme.md';
    console.log(filePath);
    expect(filePath).toEqual('./examples/readme.md');
  });

});
