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
        resolve('FILE PATH WAS SUCCESSFULLY READ');
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