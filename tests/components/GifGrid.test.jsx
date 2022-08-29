const { render, screen } = require('@testing-library/react');
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//al hacer un mo
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
	const category = 'one punch';
	test('debe de mostrar el loading inicialmente', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});

		//validamos que al redenrerizar se encuentre el texto de cargando,
		//y el texto con el nombre de la categoria que estamos buscando
		render(<GifGrid category={category} />);
		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(category));
		// screen.debug();
	});
	//el hok usefetchgifs se deberia probar aparte, por lo tanto aqui se usará un mock
	test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
		const gifs = [
			{
				id: 'abc',
				title: 'saitama',
				url: 'https://localhost/saitama.jpg',
			},
			{
				id: '123',
				title: 'goku',
				url: 'https://localhost/goku.jpg',
			},
		];

		//con los mocks podemos simular respuestas, aquí por ejemplo simulamos que nos retorna un arreglo de gifs
		// y un isloading en false, esto simularia que ya se retornaron datos del back y podemos hacer las validaciones con esa simulacion de
		//respuesta de json

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});
		//renderizamos el componente
		render(<GifGrid category={category} />);
		//getallbyrole retorna todos, getbyrole retorna uno
		//validamos que nos retorne un arreglo de imagenes de longitud 2
		expect(screen.getAllByRole('img').length).toBe(2);
	});
});

