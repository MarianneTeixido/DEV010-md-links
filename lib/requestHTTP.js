// const axios = require('axios');

// //Acá se envía un arreglos de objetos
// function requestHTTP(extractLinks) {
  
//   //console.log(extractLinks);

//  // for (let i = 0; i < extractLinks.length; i++) {
//     // let elem1 = extractLinks[i].href;
//     // console.log(elem1);
//     return axios.get(extractLinks.href)
//     .then(response => {
//     //console.log(response);
//     extractLinks ['status']=response.status;
//      extractLinks ['ok']='ok';
//      return extractLinks;
//     })
//     .catch(error => {
//       //extractLinks[i] ['status']= error.response.status? error.response.status:500;
//       extractLinks ['ok']='fail';//Para agregar una clave dentro de un objeto
//       //console.log(extractLinks[i]);
//       return extractLinks;
//     })
//   //}

// }



const fetch = require('node-fetch');
// const extractLinksMarkdown = require('./extractLinksMarkdown');

function requestHTTP(links) {
  // const links = extractLinksMarkdown(markdownContent, filePath);
  // const results = [];
  return new Promise ((resolve,reject)=>{
  const fetchPromises = links.map((link) => {
    return fetch(link.href, { method: 'HEAD' })
      .then((response) => {
        const statusCode = response.status;
        return {
          href: link.href,
          text: link.text,
          file: link.file,
          status: statusCode,
          ok: 'ok',
        };
      })
      .catch((error) => {
        return {
          href: link.href,
          text: link.text,
          file: link.file,
          status: 500 ,
          ok:'fail',
        };
      });
  });

  return Promise.all(fetchPromises).then((links) => resolve(links) );
});
}


module.exports = requestHTTP;
