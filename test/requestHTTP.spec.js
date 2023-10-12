const requestHTTP = require('../lib/requestHTTP'); 

// Mock para simular fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
  })
);

describe('requestHTTP', () => {
  it('debería existir la función', () => {
    expect(requestHTTP).toBeDefined();
  });

  it('debería devolver un objeto con status "ok" cuando la solicitud es exitosa', async () => {
    const links = [
      {
        href: 'http://example.com',
        text: 'Ejemplo',
        file: 'example.md',
      },
    ];

    const result = await requestHTTP(links);

    expect(result).toEqual([
      {
        href: 'http://example.com',
        text: 'Ejemplo',
        file: 'example.md',
        status: 200,
        ok: 'ok',
      },
    ]);
  });

  it('debería devolver un objeto con status "fail" cuando la solicitud falla', async () => {
    // Simulamos una solicitud que falla (código de estado 404)
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 500,
      })
    );

    const links = [
      {
        href: 'http://example.com',
        text: 'Ejemplo',
        file: 'example.md',
      },
    ];

    const result = await requestHTTP(links);

  });
});