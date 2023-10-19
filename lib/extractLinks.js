function extractLinksMarkdown(markdownContent, filePath) {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g; //Omitir las imágenes 
    const links = [];
    let match;
  
     while ((match = regex.exec(markdownContent)) !== null) {
       const [, text, href] = match;
       links.push({ href, text, file: filePath });
     }


  
    return links;
  }
  
  module.exports = extractLinksMarkdown;
