import { getGifs } from '../../src/helpers/getGifs'

describe('Pruebas en getGifs()', () => {
  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('One Punch');
    // console.log(gifs);
    //con esta funcion verificamos que el arreglo de la respuesta sea mayor que cero
    expect(gifs.length).toBeGreaterThan(0);
    //si esto da error ya no sigue ejecutando las demas pruebas y marca error
    //asi verificamos que el elemento cero del arreglo de gifs cumpla con la estructura que indicamos
    //le mandamos el objeto y las aserciones que debe hacer para cada propiedad del objeto
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });
})
