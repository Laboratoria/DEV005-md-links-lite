/* eslint-disable no-param-reassign */
// const fetch = require('node-fetch');

const validateLinks = (objetoLink) => fetch(objetoLink.href)
  .then((response) => {
    if (response.status <= 400) {
      objetoLink.status = response.status;
      objetoLink.statusText = 'OK';
    } else {
      objetoLink.status = response.status; // else la pagina nose encuentra (pixar)
      objetoLink.statusText = 'fallo';
    }
    return objetoLink;
  })
  .catch(() => {
    objetoLink.statusText = 'fail'; // en catch el link no existe (googlex.com)
    objetoLink.status = '404';
    return objetoLink;
  });

module.exports = { validateLinks };
