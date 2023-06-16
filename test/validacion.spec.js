const fs = require('fs');
// const path = require('node:path');
const { routeExists } = require('../rutas');

// test validación //existe ruta
describe('routeExists', () => {
  test('es una funcion', () => {
    expect(typeof routeExists).toBe('function');
  });
  test('if route exists and is absolute, returns it unmodified', () => {
    const path = 'C:/Users/carol/Desktop/Laboratoria/DEV005-md-links-lite/obtenerlinks.js'; // argumento que le paso a Función.
    const expectedResult = true; // resultado que espero
    const result = routeExists(path); // resultado verdadero, lo que hace la función
    expect(result).toEqual(expectedResult);
  });
});
