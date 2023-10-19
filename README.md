# Markdown Links Library

## Table of Contents

* [1. Preamble](#1-preamble)
* [2. Module Description](#2-module-description)
* [3. Installation ](#3-installation)
* [4. Flowchart](#4-flowchart)
* [5. Usage Examples](#5-usage-examples)
* [6. Credits](#6-credits)
* [7. License](#7-license)

***

## 1. Preamble

[_Readme in Spanish [here](README-ESP.md)_]

[Markdown](https://en.wikipedia.org/wiki/Markdown) is a lightweight markup language very popular among developers. It is used in many platforms that handle plain text (GitHub, forums, blogs, etc.), and it is very common to find several files in this format in any kind of repository, starting with the traditional `README.md`.

These `Markdown` files typically contain links that are often broken or no longer valid, which greatly impairs the value of the information you want to share.

Within an open-source community, we have been asked to create a tool using [Node.js](https://nodejs.org/) that reads and analyzes Markdown files to check the links they contain and report some statistics.

## 2. Module Description

This project is a Node.js library that serves as a tool to analyze links within Markdown files. This library is available in two forms: as a module published on GitHub, which users can install and import into other projects, and as a Command Line Interface (CLI) that allows you to use the library directly from the terminal.

[Node.js](https://nodejs.org/en/) is a JavaScript runtime environment built with the [Chrome V8 JavaScript engine](https://developers.google.com/v8/). This allows us to run JavaScript in the operating system environment, whether it's on your machine or a server, giving us the ability to interact with the system itself, files, networks, etc.

## 3. Installation 

To use the following code, you need to have `Node.js` previously installed in version `>=16`,

```
$ node -v
v18.16.1
```

After that, you should clone this repository and install the dependencies.

```
$ git clone https://github.com/MarianneTeixido/DEV010-md-links.git
$ cd DEV010-md-links.git
$ npm install
```

Finally, you can add the contents of the __/lib__ folder to your project, which contains the necessary files for its execution.

## 4. Flowchart

![Flowchart](https://github.com/MarianneTeixido/DEV010-md-links/blob/main/img/Diagrama%20-%20MD%20links.png)

## 5. Usage Examples

To use this library, you should import it as a module in your code using CommonJS.

```javascript
const mdlinks = require('./lib/mdlinks');
```

Please note that you'll need to adjust the import method if you're using ES Modules.

With the module imported in your project, you can call the `mdlinks()` function, which accepts two parameters: `path` and `validate`.

- `path`: It receives the path to your Markdown file. It can read the absolute or relative path of a specific file. You can also pass the path of a folder, and the function will read all the Markdown files it finds inside.

- `validate`: This is an optional boolean parameter that you can add to validate the HTTP status code. By default, mdlinks is executed with `validate` set to _false_.

When using the `mdlinks()` function of this library with only the `path` parameter, it will return an object with the properties `href`, `text`, and `path`.

Example:

```javascript
mdlinks('./examples/readme.md')
   .then((links) => {
     console.log(links); 
   })
      .catch((error) => {
     console.error(error);
   });
```

When using the `mdlinks()` function of this library with the `path` and `validate` parameters, it will return an object with the properties `href`, `text`, `path`, `status`, and `ok`.

`status` will show the HTTP response code's status, and `ok` will show _ok_ if the response code is valid and _fail_ if it's not.

Example:

```javascript
mdlinks("./examples/readme.md", true )
  .then(links => {
    console.log(links);
  })
  .catch(console.error);
```

Note: You can pass a directory to the path, and it will read the Markdown files within it. It won't read other directories within an existing directory.

## 6. Credits

Library developed by Marianne Teixido.

## 7. License

GNU General Public License v3.0 or later"
