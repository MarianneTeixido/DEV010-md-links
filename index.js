const mdlinks = require('./lib/mdlinks'); // Ruta relativa al archivo mdlinks.js

// Examples:

//Correct
mdlinks('./examples/readme.md');


//Fail 
mdlinks('./examples/readme3.md');
