const ruta = require('path'); // para ruteado si es absoluta o relativa
const fs = require('fs'); // modulo de node que permite interactuar con los archivos del sistema.

// existencia de la ruta si o no
 const routeExists = (path = ' ') => {
 const existeRuta = fs.existsSync(path);
 return existeRuta;
 };

// ruta absoluta o ruta relativa, sino se transforma en ruta absoluta
 const resolveRoute = (path) => {
  const nuevaRuta = ruta.isAbsolute(path);
  const rutatransformada = ruta.resolve(path);
  console.log('es una ruta absoluta?', path);
  console.log(rutatransformada, 'ruta convertida a absoluta');
  return nuevaRuta;
}; 


module.exports = {resolveRoute , routeExists };
