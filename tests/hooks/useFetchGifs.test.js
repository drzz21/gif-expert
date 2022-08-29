import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('pruebas en el hook useFetchGifs', () => {
  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('one punch'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('debe de retornar un arreglo de imagenes y isloading en false', async () => {
    //de esta forma renderizamos un hook, destructuramos su resultado y le enviamos el parametro onepunch para
    //que nos retorne imagenes
    const { result } = renderHook(() => useFetchGifs('one punch'));

    //con el waitfor paramos la ejecucion hsata que se cumpla esta condicion,
    //de este modo sabemos que las imagenes nos retornaron algo entonces es valido
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    //como ya tenemos la respuesta del metodo podemos tambien obtener el valor actual, que ahora como
    //ya se ejecutó la api, debería ser otro distinto
    //en este caso las imagenes deberian ser un arreglo y el isloading ya debería ser falso
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

  });


});
