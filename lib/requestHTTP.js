const fetch = require('node-fetch');
// const extractLinksMarkdown = require('./extractLinksMarkdown');

function requestHTTP(links) {
  // const links = extractLinksMarkdown(markdownContent, filePath);
  // const results = [];
  return new Promise ((resolve,reject)=>{
  const fetchPromises = links.map((link) => {
    return fetch(link.href, { method: 'GET' })
      .then((response) => {
        const statusCode = response.status;
        return {
          href: link.href,
          text: link.text,
          file: link.file,
          status: statusCode,
          ok: response.status >= 200 && response.status < 400 ? 'ok' : 'fail',
        };
      })
      .catch((error) => {
        return {
          href: link.href,
          text: link.text,
          file: link.file,
          status: 404 ,
          ok:'fail',
        };
      });
  });

  return Promise.all(fetchPromises)
    .then((links) => resolve(links));
});
}


module.exports = requestHTTP;
