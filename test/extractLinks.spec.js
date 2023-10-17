const extractLinksMarkdown = require('../lib/extractLinks'); 


describe('Verifica que extractLinksMarkdown es una funcion', () => {
    
    it('Debería de existir extractLinksMarkdown como funcion', () => {
      // function defined
      expect(extractLinksMarkdown).toBeDefined();
      // is a function
      expect(typeof extractLinksMarkdown).toBe('function');
    });
  
    it('Debería encontrar enlaces dentro del contenido de Markdown', () => {
      //Markdown with links
      const markdownContent = `
        [Ada](https://en.wikipedia.org/wiki/Ada_Lovelace).
        [Net Art](https://anthology.rhizome.org/).
      `;
  
      // ExtractLinksMarkdown function
      const links = extractLinksMarkdown(markdownContent, 'path/to/my/file.md');
  
      // Los links fueron encontrados correctamente
      expect(links).toEqual([
        {
          href: 'https://en.wikipedia.org/wiki/Ada_Lovelace',
          text: 'Ada',
          file: 'path/to/my/file.md',
        },
        {
          href: 'https://anthology.rhizome.org/',
          text: 'Net Art',
          file: 'path/to/my/file.md',
        },
      ]);
    });
  });

  //Probar si a markdownContent funciona mal