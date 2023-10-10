const readPath = require('../lib/readPath'); 
const path = require('node:path');
const fs = require('fs');

describe('readPath function exists', () => {
    
  it('readPath function must exist', () => {
    // readPath is defined
    expect(readPath).toBeDefined();
    // readPath is a function
    expect(typeof readPath).toBe('function');
  });

  it('readPath function must resolve a path', () => {
    const filePath = "/home/lxow/git/LABORATORIA/DEV010-md-links/examples/readme.md";
    const resolvedPath = readPath(filePath);
    // path exists in the file system
     const isValidPath = fs.existsSync(resolvedPath);
    // route is valid
     expect(isValidPath).toBe(true);
  });
});
