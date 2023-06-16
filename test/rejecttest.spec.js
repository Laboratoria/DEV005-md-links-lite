/* eslint-disable prefer-promise-reject-errors */
// mock de fetch del catch
// eslint-disable-next-line import/extensions
const { validateLinks } = require('../validarL.js');

global.fetch = (() => Promise.reject({
  href: 'https://googlx.com',
  status: '404',
  statusText: 'fail',
}));
describe('validateLinks', () => {
  test('devuelve un objeto de enlace válido con un código de estado válido', async () => {
    const linkObj = {
      href: 'https://googlx.com',
    };
    const result = await validateLinks(linkObj);
    expect(result).toStrictEqual({
      href: 'https://googlx.com',
      status: '404',
      statusText: 'fail',
    });
  });
});
