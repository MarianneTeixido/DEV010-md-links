const mdlinks = require('./lib/mdlinks'); // Ruta relativa al archivo mdlinks.js


// mdlinks('./examples/readme.md',true)
//   .then((links) => {
//     console.log(links); // Imprime el objeto en la consola
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// mdlinks('./examples/readme.md')
// .then((links) => {
//   console.log(links); 
// })
// .catch((error) => {
//   console.error(error);
// });


mdlinks("/home/lxow/git/CENTRO/2024-1/cc2-1-24-1")
  .then(links => {
    console.log(links);
  })
  .catch(console.error);


// mdlinks("/home/lxow/git/CENTRO/2024-1/cc2-1-24-1", true)
//   .then(links => {
//     console.log(links);
//   })
//   .catch(console.error);


// mdlinks("/home/lxow/git/CENTRO/2024-1/cc2-1-24-1", false)
//   .then(links => {
//     console.log(links);
//   })
//   .catch(console.error);

