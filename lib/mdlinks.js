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
                //console.log(stats)
                if (stats.isFile() && isMarkdownFile(path)) {
                    //Agrega el path del archivo md al arreglo vacio mdList
                    markdownList.push(path)
                }
                if (stats.isDirectory()) {
                    //Lee los archivos al interior de un directorio
                    const filenames = fs.readdirSync(path);
                    //console.log('File names: ', filenames);

                    //Filtra los que son tipo markdown y los guarda en mdFiles
                    const markdownFiles = filenames.filter(file => isMarkdownFile(file))
                    
                    //Recorre el arreglo y crea uno nuevo en mdPaths
                    //Join une la ruta del directorio con cada elemento del arreglo md
                    //El resultado es un nuevo arreglo con la ruta completa de todos los mdfiles
                    const markdownPaths = markdownFiles.map((file) => {
                        return pathModule.join(path, file)
                    });

                    //mdList que es un arreglo vacío se le agregan 
                    //el operador de propagacion descompone el arreglo mdPaths 
                    //Y push los agrega al arreglo mdList
                    markdownList.push(...markdownPaths);
                }
                
                if (markdownList.length === 0) {
                    //Si mdList es igual a zero significa que no hay un path que contenga md
                    //Y retorna el reject
                    reject('Error path doesnt contain markdown')
                    return //retorno anticipado
                }

                //mdfilesList crea un nuevo arreglo usando map sobre mdList
                //para cada archivo md dentro de list retorna un objeto 
                //con las propiedades path y file. 
                //En file se lee el contenido usando readFileSync
                //Todo queda almancenado en mdFilesList
                const markdownFilesList = markdownList.map(pathFile => {
                    //console.log('Markdown files : ', pathFile)
                    return { path: pathFile, file: fs.readFileSync(pathFile, 'utf8') }
                })

                //mdObjLinks crea un nuevo arreglo recorriendo el almacenado en mdFilesList
                //para cada elemento del arreglo se toman los enlaces (file) y la ruta(path)
                //con flat se aplana el resultado y se almacena en mdObjLinks
                //ExtractLinks toma como valor file y path y retorna el objeto 
                //con las propiedades {href, text, path}
                const mdObjLinks = markdownFilesList.map(({ path, file }) => {
                    return extractLinksMarkdown(file, path)
                }).flat()

                //Si validate es verdadero se realiza una solicitud HTTP
                //con la función request que toma como argumento el arreglo mdObjLinks
                //Después resuelve la promesa para devolver una lista de objetos 
                //En donde se añaden las propiedades {status, ok} al objeto ya existente
                //Devuelve el resultado usando resolve
                if (validate) {
                    requestHTTP(mdObjLinks)
                        .then((links) => {
                            resolve(links);
                        })
                    return //Finaliza la ejecución.
                }
                resolve(mdObjLinks);// Si no se cumple la condición de validate se resuelve 
                                    //con el valor de mdObjLinks
            }
        })
    });
}

module.exports = mdlinks;

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
