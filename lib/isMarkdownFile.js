const path = require('path');

function isMarkdownFile(filePath) {
    const markdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
    console.debug(filePath)
    const fileExt = path.extname(filePath);
    
    return markdownExtensions.includes(fileExt);
}

module.exports = isMarkdownFile;
