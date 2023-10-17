const mdlinks = require('./lib/mdlinks'); // Ruta relativa al archivo mdlinks.js


// mdlinks('./examples/readme.md')
//   .then((links) => {
//     console.log(links); // Imprime el objeto en la consola
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// mdlinks('./examples/readme.md', true)
// .then((links) => {
//   console.log(links); 
// })
// .catch((error) => {
//   console.error(error);
// });


mdlinks("/home/lxow/git/CENTRO/2024-1/cc2-1-24-1", true )
  .then(links => {
    console.log(links);
  })
  .catch(console.error);

// mdlinks("/home/lxow/git/CENTRO/2024-1/cc2-1-24-1xxxx")
//   .then(links => {
//     console.log(links);
//   })
//   .catch(console.error);

// const miPrimesa = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//    resolve('funciona a los 2s')   
//   }, 5000);
  
//   setTimeout(() => {
//   reject('falló resolve')
//   }, 1000);
  
//   })
  
//   miPrimesa.then(
//       (valor) => {
//           console.log(valor)
//       }
//   )
//   .catch(
//       (error) =>{
//           console.log(error)
//       }
//   )
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

