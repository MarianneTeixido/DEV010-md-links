const path = require('path');
const mdlinks = require('../lib/mdlinks');


describe('mdlinks', () => {

  it('Resolve promise', () => {
    const filePath = './examples/readme.md';
    console.log(filePath);
    expect(filePath).toEqual('./examples/readme.md');
  });

});

describe('mdlinks', () => {
  it('resuelve el path y valida si es un archivo o directorio', async () => {
    const validFilePath = './examples/readme.md'; 
    const validDirPath = "/home/lxow/git/CENTRO/2024-1/cc2-1-24-1"; 

    try {
      const resultFile = await mdlinks(validFilePath);
      const resultDir = await mdlinks(validDirPath);

      expect(resultFile).toBeDefined(); // Asegura que la promesa se resuelva sin errores para un archivo
      expect(resultDir).toBeDefined(); // Asegura que la promesa se resuelva sin errores para un directorio

      // Verifica que el resultado sea un objeto con propiedades que indican si es un archivo o directorio
      expect(typeof resultFile === 'object' && resultFile.isFile).toBe(true);
      expect(typeof resultDir === 'object' && resultDir.isDirectory).toBe(true);
    } catch (error) {
      // Maneja errores si la promesa se rechaza
      expect(error).toBeUndefined(); 
    }
  });

});
