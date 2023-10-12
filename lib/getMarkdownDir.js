const path = require('node:path');
const fs = require('node:fs');
const isMarkdownFile = require('./isMarkdownFile');



function getMarkdownDir (directoryPath){
    
    //const __dirname = directoryPath.dirname(__filename);
    const filenames = fs.readdirSync(directoryPath); 
    // console.log('Directory name: ', __dirname);
    console.log('File names: ', filenames);

  
       const markdownFiles = filenames.filter(file => isMarkdownFile(file))
        console.log('Markdown files:', markdownFiles); 
    

    // const dirContents = fs.readdirSync(__dirname);
    // console.log('Directory contents: ',dirContents);
}

module.exports = getMarkdownDir;