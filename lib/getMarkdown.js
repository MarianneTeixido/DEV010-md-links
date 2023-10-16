const path = require('node:path');
const fs = require('node:fs');
const isMarkdownFile = require('./isMarkdownFile');



function getMarkdownDir(path) {
    



    
    const markdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
    const fileExt = path.extname(path);
        
    const filenames = fs.readdirSync(path); 
    console.log('File names: ', filenames);

    const markdownFiles = filenames.filter(file => isMarkdownFile(file))
    console.log('Markdown files : ',markdownFiles); 
   
    markdownFiles.forEach(file =>{ 
        console.log('Markdown files : ',file)
        fs.readFile(directoryPath, 'utf8')
    })

}

module.exports = getMarkdownDir;