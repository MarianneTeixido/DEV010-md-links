const extractLinksMarkdown = require('../lib/extractLinks'); 


describe('Check the extractLinksMarkdown function', () => {
    
    it('Should exist the extractLinksMarkdown function', () => {
      // function defined
      expect(extractLinksMarkdown).toBeDefined();
      // is a function
      expect(typeof extractLinksMarkdown).toBe('function');
    });
  
    it('Should find links within Markdown content', () => {
      //Markdown with links
      const markdownContent = `
        [Ada](https://en.wikipedia.org/wiki/Ada_Lovelace).
        [Net Art](https://anthology.rhizome.org/).
      `;
  
      // ExtractLinksMarkdown function
      const links = extractLinksMarkdown(markdownContent, 'path/to/my/file.md');
  
      // links were found correctly
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