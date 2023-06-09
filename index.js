const ruta = require('path'); // modulo node.js

const routeExists = require('./rutas.js'); //ruta existe
const resolveRoute = require('./rutas.js'); //ruta absolut re
const getContent = require('./obtenerlinks');//lectura arch
const readingFile = require('./obtenerlinks.js');//cont Link
const getLinks = require('./obtenerlinks.js')//extraccion de links 
const validateLinks = require('./validarLinks.js')


// creando funcion md links para ver si la ruta es valida o invalido de manera asincrona
const mdLinks = (path, options) => new Promise((resolve, reject) => {
  const rutaAbsolutas = resolveRoute(path);
  const rutas = routeExists(path);
  const contenidoArchivos = getContent(path);
  const lecturaArchivo = readingFile(path);
  resolve(path, options);
  console.log(rutaAbsolutas, rutas, contenidoArchivos, lecturaArchivo, ruta);
});

module.exports = { mdLinks, ruta, readingFile, getLinks };
