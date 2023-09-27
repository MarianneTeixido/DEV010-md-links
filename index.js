// // Import the path module
 const path = require('path');
   
//console.log("Current directory:", __dirname);

//console.log(path.extname('./examples/readme.md'))
//console.log(path.extname('./examples/readmergrgre.md'))

 const promiseA = new Promise((resolutionFunc, rejectionFunc) => {
  // resolutionFunc('./examples/readme.md');
   rejectionFunc('path not found');
 });

//"promiseA" resolve
 promiseA.then((val) => console.log("the async value is:", val));
 promiseA.catch((error)=>console.log(error));
