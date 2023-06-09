const fetch = require('node-fetch');

const validateLinks = (arrayLinks) => {
  const arrayValidate = arrayLinks.map((obj) => fetch(obj.href)
    .then((response) => console.log(response.status))

    .catch((error) => console.log('mensaje de error', error)));
  console.log('aqui', arrayValidate);
};

const prueba = [{
  href: 'https://www.ilossilos.cl/locales-comerciales-2/?gad=1&gclid=CjwKCAjwg-GjBhBnEiwAMUvNW0DDrjr-0BG8ncLfXCRJQSDfGq1Akp6dZhehEPGF6ZNYelh6Rjs37BoCtO8QAvD_BwE',
  text: 'goole',
  file: 'C:/Users/carol/Desktop/Laboratoria/DEV005-md-links-lite/linksprueba.md',
}];
validateLinks(prueba);
module.exports = validateLinks;
