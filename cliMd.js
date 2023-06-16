// ejecución de funcion mdlinks (cli)
// eslint-disable-next-line import/extensions
const mdLinks = require('./index.js');

mdLinks('./linksprueba.md', { validate: true }).then((result) => {
  console.log(result);
})
  .catch((error) => {
    console.error(error);
  });
