/* eslint-disable arrow-parens */
import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  }); /* Antes de que se inicie cada test, vamos a generar nuestro mock del fetch gracias a la dependencia que instalamos */
  test('Call API and return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '123456' }));

    getData('https://google.com').then(response => {
      expect(response.data).toEqual('123456');
    });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com'); /* Esta linea es solo para verificar que realmente se este haciendo la llamada api, la podemos hacer fallar a proposito */
  });
});
