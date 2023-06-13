/* eslint-disable prefer-promise-reject-errors */
const ruta = require('path'); // modulo path de node.js

const { routeExists } = require('./rutas.js'); // ruta existe
const { resolveRoute } = require('./rutas.js'); // ruta absolut re
const { getContent } = require('./obtenerlinks');// lectura arch
const { readingFile } = require('./obtenerlinks.js');// cont Link
const { getLinks } = require('./obtenerlinks.js'); // extraccion de links
const { validateLinks } = require('./validarL.js');// status links

// creando funcion md links para ver si la ruta es valida o invalido de manera asincrona//

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  let rutaResuelta = '';
  const routeVerificate = routeExists(path);
  console.log(routeVerificate)
  if (!routeVerificate) {
    reject('No existe la ruta');
  } else {
    rutaResuelta = resolveRoute(path);
  }
  console.log(rutaResuelta);
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

/* mdLinks('C:/Users/maria/OneDrive/Escritorio/MdLinks/DEV005-md-links-lite/markDown/routes.md', { validate: true }).then((result) => {
  console.log(/*'resultValidate', */ // result);
// }).catch((error) => {
// console.log(/*'erroValidate',*/error);
// })

module.exports = mdLinks;

/* const mdLinks = (path, options) => new Promise((resolve, reject) => {
  const rutaResuelta = resolveRoute(path);
  if (!rutaResuelta(path)) {
    reject('ruta inválida');
  } else if (options.validate) {
    rutaResuelta.then((links) => Promise.all(links.map((links) => (validateLinks))))
      .then((validateLinks) => {
        resolve(validateLinks);
      })
      .catch((error) => {
        reject(error);
      });
  } else {
    rutaResuelta
      .then((links) => {
        resolve(links);
      })
      .catch((error) => {
        reject(error);
      });
  }
});

mdLinks('./linksprueba.md', {
  validate: true,
});
console.log(links)
  .then((links) => console.log(links))
  .catch((err) => console.log(err)); */ // el error

/* mdLinks('./linksprueba.md', {validate:true}) // aqui si tienes opciones
  .then(respuesta => console.log(respuesta))
  .catch(err=>console.log(err))
  */
