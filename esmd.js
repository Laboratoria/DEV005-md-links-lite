const path = require('path');

// identificar como archivo MD
const linkMd = (ruta) => {
  const ext = path.extname(ruta);
  if (ext !== '.md') {
    throw new Error(`${ruta} no es archivo MD`);// si no es archivo md.
  }
  return ruta;
};
module.export = { linkMd };
