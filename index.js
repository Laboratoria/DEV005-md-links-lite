/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable prefer-promise-reject-errors */
// const ruta = require('path'); // modulo path de node.js

const { routeExists } = require('./rutas.js'); // ruta existe
const { resolveRoute } = require('./rutas.js'); // ruta absolut re
const { readingFile } = require('./obtenerlinks.js');// cont Link
const { validateLinks } = require('./validarL.js');// status links

// creando funcion md links para ver si la ruta es valida o invalido de manera asincrona//

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  let rutaResuelta = '';
  const routeVerificate = routeExists(path);
  if (!routeVerificate) {
    reject('No existe la ruta');
  } else {
    rutaResuelta = resolveRoute(path);
  }
  if (options.validate) {
    readingFile(rutaResuelta).then((links) => Promise.all(links.map((link) => (validateLinks(link)))))
      .then((resValidate) => {
        resolve(resValidate);
      })
      .catch((error) => {
        reject(error);
      });
  } else {
    readingFile(rutaResuelta).then((links) => {
      resolve(links);
    })
      .catch((error) => {
        reject(error);
      });
  }
});

module.exports = mdLinks;
