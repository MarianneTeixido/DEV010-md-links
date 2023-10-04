const readPath = require('../lib/readPath'); 
const path = require('node:path');
const fs = require('fs');

describe('Check if readPath function exists', () => {
    
  it('readPath function must exist', () => {
    // Check if readPath is defined
    expect(readPath).toBeDefined();
    // Check if readPath is a function
    expect(typeof readPath).toBe('function');
  });

  it('readPath function must resolve a path', () => {
    const filePath = "/home/lxow/git/LABORATORIA/DEV010-md-links/examples/readme.md"; // Proporciona una ruta de archivo válida
    const resolvedPath = readPath(filePath);
    // Check if the resolved path exists in the file system
     const isValidPath = fs.existsSync(resolvedPath);
    // Check if the route is valid
     expect(isValidPath).toBe(true);
  });
});
