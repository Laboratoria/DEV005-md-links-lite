// const fetch = require('node-fetch');
const { validateLinks } = require('../validarL.js');

// test de promesa
/* ('test mock de fetch', () => jest.mock('node-fetch').then(((res) => {
  if (res.status <= 400) {
    objPrueba.status = res.status;
    objPrueba.statusText = 'OK';
  } else {
    objPrueba.status = res.status;
    objPrueba.statusText = 'fail';
  }
  return objPrueba;
})
  .catch((err) => {
    objPrueba.statusText = 'fail';
    objPrueba.status = '404';
      return objPrueba;

  })
expect(data).toBe('')

)); */

// test de mocks de fetch (incompleto)
/* test jest.mock('node-fetch', (objPrueba) => jest.fn(objPrueba)
  .then((res) => {
    if (res.status <= 400) {
      objPrueba.status = res.status;
      objPrueba.statusText = 'OK';
    } else {
      objPrueba.status = res.status;
      objPrueba.statusText = 'fail';
    }
    return objPrueba;
  })
  .catch((err) => {
    objPrueba.statusText = 'fail';
    objPrueba.status = '404';
    return objPrueba;
  })); */
// test mock de fetch con promesa de if
global.fetch = (() => Promise.resolve({
  href: 'https://www.google.com',
  status: 200,
  statusText: 'OK',
}));
// test de estatus de links
describe('validateLinks', () => {
  test('devuelve un objeto de enlace válido con un código de estado válido', async () => {
    const linkObj = {
      href: 'https://www.google.com',
    };
    const result = await validateLinks(linkObj);
    expect(result).toStrictEqual({
      href: 'https://www.google.com',
      status: 200,
      statusText: 'OK',
    });
  });
});
