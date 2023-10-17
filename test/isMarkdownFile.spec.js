const isMarkdownFile = require('../lib/isMarkdownFile'); 


describe('isMarkdownFile', () => {
  it('es una función', () => {
    expect(typeof isMarkdownFile).toBe('function');
  });

  it('detecta archivos Markdown con extensiones válidas', () => {
    const validExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];

    validExtensions.forEach((extension) => {
      const filePath = `archivo.${extension}`;
      expect(isMarkdownFile(filePath)).toBe(true);
    });
  });

  it('no detecta archivos con extensiones no válidas', () => {
    const invalidExtensions = ['.html', '.txt', '.json', '.js'];

    invalidExtensions.forEach((extension) => {
      const filePath = `archivo.${extension}`;
      expect(isMarkdownFile(filePath)).toBe(false);
    });
  });
});
