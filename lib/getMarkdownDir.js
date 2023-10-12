const path = require('node:path');
const fs = require('node:fs');



function getMarkdownDir (directoryPath){
    
    //const __dirname = directoryPath.dirname(__filename);
    const filenames = fs.readdirSync(directoryPath); 
    // console.log('Directory name: ', __dirname);
    console.log('File names: ', filenames);

    filenames.forEach(file => { 
        console.log(file); 
      }); 

    // const dirContents = fs.readdirSync(__dirname);
    // console.log('Directory contents: ',dirContents);
}

module.exports = getMarkdownDir;