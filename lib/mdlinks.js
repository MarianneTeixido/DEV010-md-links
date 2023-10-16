// const fs = require('node:fs');
// const pathModule = require('node:path');

// const readPath = require('./readPath');
// const validatePath = require('./validatePath');
// const extractLinksMarkdown = require('./extractLinks');
// const requestHTTP = require('./requestHTTP');
// const getMarkdownDir = require('./getMarkdownDir')
// const isMarkdownFile = require('./isMarkdownFile');

// function mdlinks(filePath, validate = false) {
//   return new Promise((resolve, reject) => {
//       // Convierte la ruta en absoluta
//       const absolutePath = readPath(filePath);
//       validatePath(absolutePath)
//           .then(() => {
//               if (isMarkdownFile(absolutePath) || getMarkdownDir(absolutePath)) {

//                   fs.readFile(absolutePath, 'utf8', (readErr, data) => {
//                       if (readErr) {
//                           reject('ERROR - COULD NOT READ FILE CONTENT');
//                       } else {
//                           const extractLinks = extractLinksMarkdown(absolutdata, ePath);
//                           if (validate) {
//                               requestHTTP(extractLinks)
//                                   .then((links) => {
//                                       resolve(links);
//                                   });
//                           } else {
//                               resolve(extractLinks);
//                           }
//                       }
//                   });
//               } else {
//                   reject('ERROR - NOT A MARKDOWN FILE');
//               }
//           })
//           .catch((error) => {
//               resolve("ERROR INVALID PATH");
//           });
//   });
// }

// module.exports = mdlinks;

const { rejects } = require('node:assert');
const fs = require('node:fs');
const pathModule = require('node:path');
const isMarkdownFile = require('./isMarkdownFile');
const extractLinksMarkdown = require('./extractLinks');
const requestHTTP = require('./requestHTTP');

function mdlinks(path, validate = false) {
    path = pathModule.resolve(path);
    return new Promise((resolve, reject) => {
        fs.stat(path, (error, stats) => {
            if (error) {
                console.log(error)
                reject('Error - Invalid path')
            } else {
                const markdownList = [];
                console.log(stats)
                if (stats.isFile() && isMarkdownFile(path)) {
                    markdownList.push(path)
                }
                if (stats.isDirectory()) {
                    const filenames = fs.readdirSync(path);
                    console.log('File names: ', filenames);

                    const markdownFiles = filenames.filter(file => isMarkdownFile(file))
                    const markdownPaths = markdownFiles.map((file) => {
                        return pathModule.join(path, file)
                    });
                    markdownList.push(...markdownPaths);


                }
                if (markdownList.length === 0) {
                    reject('Error path doesnt contain markdown')
                    return //retorno anticipado
                }
                const markdownFiles = markdownList.map(pathFile => {
                    console.log('Markdown files : ', pathFile)
                    return { path: pathFile, file: fs.readFileSync(pathFile, 'utf8') }
                })
                const mdObjLinks = markdownFiles.map(({ path, file }) => {
                    return extractLinksMarkdown(file, path)
                }).flat()
                if (validate) {
                    requestHTTP(mdObjLinks)
                        .then((links) => {
                            resolve(links);
                        })
                    return
                }
                resolve(mdObjLinks);
            }
        })
    });
}

module.exports = mdlinks;