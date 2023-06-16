const { validateLinks } = require('../validarL.js');

global.fetch = (() => Promise.resolve({
  href: 'https://www.pixar.com/error404',
  status: '404',
  statusText: 'fallo',
}));
describe('validateLinks', () => {
  test('devuelve un objeto de enlace válido con un código de estado válido', async () => {
    const linkObj = {
      href: 'https://www.pixar.com/error404',
    };
    const result = await validateLinks(linkObj);
    expect(result).toStrictEqual({
      href: 'https://www.pixar.com/error404',
      status: '404',
      statusText: 'fallo',
    });
  });
});
