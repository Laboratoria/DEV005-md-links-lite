const fetch = require('node-fetch');

const validateLinks = (objetoLink) => fetch(objetoLink.href)
  .then((response) => {
    if (response.status <= 400) {
      objetoLink.status = response.status;
      objetoLink.statusText = 'OK';
    } else {
      objetoLink.status = response.status;
    objetoLink.statusText = 'fail';
    } 
    return objetoLink;
  })
  .catch((error) => {
    objetoLink.statusText = 'fail';
    objetoLink.status = '404'
    return objetoLink;
  });
// validateLinks(prueba)
module.exports = { validateLinks };
