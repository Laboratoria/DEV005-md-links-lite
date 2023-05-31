const rutasValidas = require('./rutas');

console.log(rutasValidas('test/md-hhoi.spec.js')); // archivo inexistente , con ruta relativa pero se conv en abs
console.log(rutasValidas('rutas.js')); // si existe con ruta relativa y la transforma a absoluta
console.log(rutasValidas('C:/Users/carol/Desktop/Laboratoria/DEV005-md-links-lite/linksprueba.md')); // ruta real absoluta
console.log(rutasValidas('C:/Users/carol/Desktop/Laboratoria/DEV005-md-links-lite/linksprueba2.md')); // ruta falsa absoluta

// creando funcion md links para ver si la ruta es valida o invalido de manera asincrona
// const mdLinks = new Promise(function (resolve, reject) {
// let verLink =
// })
