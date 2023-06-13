// --valide (controlar si no false)---
// ejecución de funcion mdlinks (cli)

//const fetch = require('node-fetch');
const mdLinks = require('./index.js');
console.log(mdLinks)
mdLinks('./linksprueba.md', { validate: true }).then((result) => {
  console.log(result); 
})
  .catch((error) => {
    console.error(error);
  });

//module.exports = mdLinks;
