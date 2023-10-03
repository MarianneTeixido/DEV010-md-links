// // Import the path and fs module
const path = require('node:path');
const fs = require('node:fs');

function mdlinks(filePath) {
  const absolutePath = path.resolve(filePath);

  const promise = new Promise((resolve, reject) => {
    // Check if the file exists and is readable
    fs.access(absolutePath, fs.constants.R_OK, (err) => {
      if (err) {
        reject('ERROR - ROUTE NOT FOUND');
      } else {
        // Check if the file has a Markdown extension
        const fileExtension = path.extname(absolutePath).toLowerCase();
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
          resolve('SUCCESS - FILE PATH WAS READ - MARKDOWN FILE');
        } else {
          reject('ERROR - NOT A MARKDOWN FILE');
        }
      }
    });
  });

  // We use then and catch to handle the promise result
  promise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = mdlinks;