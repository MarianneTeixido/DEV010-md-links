const fs = require('node:fs');

function validatePath(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, fs.constants.R_OK, (err) => {
      if (err) {
        reject('ERROR - ROUTE NOT FOUND');
      } else {
        resolve();
      }
    });
  });
}

module.exports = validatePath;
