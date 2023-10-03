const path = require('node:path');

function readPath(filePath) {
  return path.resolve(filePath);
}

module.exports = readPath;
