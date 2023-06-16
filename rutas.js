const ruta = require('path'); // para ruteado si es absoluta o relativa
const fs = require('fs'); // modulo de node que permite interactuar con los archivos del sistema.

// existencia de la ruta si o no
const routeExists = (path = ' ') => {
  const existeRuta = fs.existsSync(path);
  return existeRuta;
};

// ruta absoluta o ruta relativa, sino se transforma en ruta absoluta
const resolveRoute = (path) => {
  const tengoRuta = routeExists(path);
  if (!tengoRuta) return undefined;
  const nuevaRuta = ruta.isAbsolute(path);
  const rutatransformada = ruta.resolve(path);
  if (nuevaRuta) {
    return path;
  }
  return rutatransformada;
};

module.exports = { resolveRoute, routeExists };
