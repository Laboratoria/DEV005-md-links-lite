// --valide (controlar si no false)---este proyecto es lite asi que no va esta parte.
// ejecución de funcion mdlinks (cli)

const fetch = require('node-fetch');
const mdLinks = require('./index.js');

mdLinks('./linksprueba.md.', { validate: false }).then((result) => {
  console.log(result);
})
  .catch((error) => {
    console.error(error);
  });

module.exports = mdLinks;
