const requestHTTP = require('../lib/requestHTTP'); 


global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 'ok',
  })
);

describe('requestHTTP', () => {
  it('debería existir la función', () => {
    expect(requestHTTP).toBeDefined();
  });

  it('debería devolver un objeto con status "ok" cuando la solicitud es exitosa', async () => {
    const links = [
      {
        href: 'https://www.linkedin.com/in/marianneteixidodev/',
        text: 'Perfil Linkedin',
        file: 'ejemplo.md',
      },
    ];

    const result = await requestHTTP(links);

  });

  it('debería devolver un objeto con status "404" cuando la solicitud falla', async () => {

    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: '404',
      })
    );

    const links = [
      {
        href: 'https://www.linkedinxx.com/in/marianneteixidodev/',
        text: 'Ejemplo fail',
        file: 'ejemplo.md',
      },
    ];

    const result = await requestHTTP(links);

  });
});