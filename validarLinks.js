/* const fetch = require('node-fetch');

const validateLinks = (arrayLinks) => {
  const arrayValidate = arrayLinks.map((obj) => fetch(obj.href)
    .then((response) => {
      obj.status = response.status;
      if (response.status <= 400) {
        obj.ok = true; //en caso de exito
      } else {
        obj.fail = true; //en caso de fallo de mensaje ok = fail
      }
    };
  )
    .catch((error) => console.log('mensaje de error', error)));
  console.log('aqui', arrayValidate);
};

resolve(validateLinks);
const prueba = [{
  href: 'https://www.ilossilos.cl/locales-comerciales-2/?gad=1&gclid=CjwKCAjwg-GjBhBnEiwAMUvNW0DDrjr-0BG8ncLfXCRJQSDfGq1Akp6dZhehEPGF6ZNYelh6Rjs37BoCtO8QAvD_BwE',
  text: 'goole',
  file: 'C:/Users/carol/Desktop/Laboratoria/DEV005-md-links-lite/linksprueba.md',
}];

//validateLinks(prueba);
module.exports = validateLinks; */ // retorno implisito
