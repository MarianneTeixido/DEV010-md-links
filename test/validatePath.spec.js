const validatePath = require('../lib/validatePath'); 

describe('validatePath', () => {
  it('debería resolver la promesa si la ruta es válida', async () => {
    const validPath = __dirname; //  __dirname como una ruta válida

    await expect(validatePath(validPath)).resolves.toBeUndefined();
  });

  it('debería rechazar la promesa si la ruta no es válida', async () => {
    const invalidPath = '/ruta/inexistente'; // ruta que que no existe

    await expect(validatePath(invalidPath)).rejects.toEqual('ERROR - ROUTE NOT FOUND');
  });
});
