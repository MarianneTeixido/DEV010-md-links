const fs = require('node:fs');
const pathModule = require('node:path');
const readPath = require('./readPath');
const extractLinksMarkdown = require('./extractLinks'); 


function mdlinks(filePath) {
  return new Promise((resolve, reject) => {
    const absolutePath = readPath(filePath);

    // Check if the file exists and is readable
     //Convert to module
    fs.access(absolutePath, fs.constants.R_OK, (err) => {
      if (err) {
        reject('ERROR - ROUTE NOT FOUND');
      } else {
        const fileExtension = pathModule.extname(absolutePath);
        const markdownExtensions = [
          '.md',
          '.mkd',
          '.mdwn',
          '.mdown',
          '.mdtxt',
          '.mdtext',
          '.markdown',
          '.text'
        ];

        if (markdownExtensions.includes(fileExtension)) {
          // Read the content of the Markdown file
          //Convert to module
          fs.readFile(absolutePath, 'utf8', (readErr, data) => {
            if (readErr) {
              reject('ERROR - COULD NOT READ FILE CONTENT');
            } else {
              const links = extractLinksMarkdown(data, absolutePath);
              resolve(links);
            }
          });
        } else {
          reject('ERROR - NOT A MARKDOWN FILE');
        }
      }
    });
  });
}

module.exports = mdlinks;
