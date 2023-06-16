// funcion para buscar links y obtener los objetos href, text y file

// validación para leer archivo, leer archivo MD
// const ruta = require('path'); // modulo node.js
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const markDownIt = require('markdown-it');
// eslint-disable-next-line import/no-extraneous-dependencies
const { JSDOM } = require('jsdom');
// const validateLinks = require('./validarLinks.js');

// console.log(ruta);
// extracción de links
const getLinks = (data, path = '') => {
  const linkss = [];
  const md = new markDownIt();
  const resultHtml = md.render(data);
  const dom = new JSDOM(resultHtml);
  const { document } = dom.window;

  // html
  const getElemts = document.querySelectorAll('a');
  getElemts.forEach((getElement) => {
    const text = getElement.textContent;
    const href = getElement.getAttribute('href');
    linkss.push({
      href: `${href}`,
      text: `${text}`, // insertando data dentro de variable
      file: path,
    });
    // console.log(linkss);
  });
  return linkss;
};

//
const readingFile = (path = '') => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      // console.error('error en el archivo', error);
      reject(error.message);
      // return;
    }
    // console.log('archivo leído', data); // parametro data cont data de arch
    const resultProcessData = getLinks(data, path);
    // console.log('DATA',data);
    resolve(resultProcessData);
  });
});

module.exports = { getLinks, readingFile };
