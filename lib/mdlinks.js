// mdlinks.js

const fs = require('node:fs');
const pathModule = require('node:path');
const readPath = require('./readPath'); // Import the readPath module

function mdlinks(filePath) {
  const absolutePath = readPath(filePath); // Resolved path

  const promise = new Promise((resolve, reject) => {
    // Check if the file exists and is readable
    fs.access(absolutePath, fs.constants.R_OK, (err) => {
      if (err) {
        reject('ERROR - ROUTE NOT FOUND');
      } else {
        // Check if the file has a Markdown extension
        const fileExtension = pathModule.extname(absolutePath).toLowerCase();
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
          fs.readFile(absolutePath, 'utf8', (readErr, data) => {
            if (readErr) {
              reject('ERROR - COULD NOT READ FILE CONTENT');
            } else {
              resolve(data);
            }
          });
        } else {
          reject('ERROR - NOT A MARKDOWN FILE');
        }
      }
    });
  });

  //Promise result
  promise
    .then((content) => {
      console.log('FILE CONTENT:\n', content); // Log the content of the file
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = mdlinks;
