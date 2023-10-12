const fs = require('node:fs');
const pathModule = require('node:path');

const readPath = require('./readPath');
const validatePath = require('./validatePath');
const extractLinksMarkdown = require('./extractLinks');
const requestHTTP = require('./requestHTTP');

function mdlinks(filePath, validate=false){
    return new Promise((resolve, reject) => {
        //Convierte la ruta en absoluta
        const absolutePath = readPath(filePath);
        validatePath(absolutePath)
       // requestHTTP(absolutePath)
        .then(()=>{
            /*Extname es un método del módulo Path para obtener la
            extensión de un archivo a partir de la ruta.
            */
            const fileExt = pathModule.extname(absolutePath);
            const mdExt = ['.md','.mkd','.mdwn','.mdown','.mdtxt','.mdtext','.markdown','.text'];
            /*Includes verifica si un elemento está presente en un arreglo.
            Devuelve true si esta y false si no. */
            if(mdExt.includes(fileExt)){
                fs.readFile(absolutePath,'utf8',(readErr, data)=>{
                  if(readErr){
                    reject('ERROR - COULD NOT READ FILE CONTENT');
                  }  else{
                    const extractLinks = extractLinksMarkdown(data,absolutePath);
                    if(validate){
                       requestHTTP(extractLinks)
                      .then((links)=>{
                        resolve(links)
                      })
                    }else{
                      resolve(extractLinks);
                    }
                  }
                })
            }else{
                reject('ERROR - NOT A MARKDOWN FILE');
            }
        })
        .catch((error)=>{
            resolve(error);
        })
    })
}

module.exports = mdlinks;


// function mdlinks(filePath, validate) {
//   return new Promise((resolve, reject) => {
//     //Converts to an absolute path 
//     const absolutePath = readPath(filePath);
//     //Verify that it is a valid path
//     validatePath(absolutePath)
//     .then(() => {
//       const fileExtension = pathModule.extname(absolutePath);
//       const mdExtensions = ['.md','.mkd','.mdwn','.mdown','.mdtxt','.mdtext','.markdown','.text'];

//       if (mdExtensions.includes(fileExtension)) {
//         // Leer el contenido del archivo Markdown
//         fs.readFile(absolutePath, 'utf8', (readErr, data) => {
//           if (readErr) {
//             reject('ERROR - COULD NOT READ FILE CONTENT');
//           } else {
//             const links = extractLinksMarkdown(data, absolutePath);
//             resolve(links);
//           }
//         });
//       } else {
//         reject('ERROR - NOT A MARKDOWN FILE');
//       }
//     })
//     .catch((error) => {
//       reject(error); 
//     });
// });
// }

// module.exports = mdlinks;
