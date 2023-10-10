const mdlinks = require('./lib/mdlinks'); // Ruta relativa al archivo mdlinks.js

// Examples:

//Correct
// mdlinks('./examples/readme.md');

//mdlinks('./examples/readme.js');
//File not found 
//mdlinks('./examples/readme3.md');

mdlinks('./examples/readme.md',true)
  .then((links) => {
    console.log(links); // Imprime el objeto en la consola
  })
  .catch((error) => {
    console.error(error);
  });