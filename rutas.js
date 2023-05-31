const path = require('path'); // para ruteado si es absoluta o relativa
const fs = require('fs'); // modulo de node que permite interactuar con los archivos del sistema.

const rutasValidas = (ruta) => {
  const existeRuta = fs.existsSync(ruta);
  const nuevaRuta = path.isAbsolute(ruta) ? ruta : path.resolve(ruta);
  return {
    existe: existeRuta,
    ruta: nuevaRuta,
  };
};

module.exports = rutasValidas;
