const { render, screen } = require('@testing-library/react');
import { GifGrid } from '../../src/components/GifGrid';

describe('Pruebas en <GifGrid/>', () => {
	const category = 'one punch';
	test('debe de mostrar el loading inicialmente', () => {
    //validamos que al redenrerizar se encuentre el texto de cargando,
    //y el texto con el nombre de la categoria que estamos buscando
		render(<GifGrid category={category} />);
		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(category));
		// screen.debug();
	});
	//el hok usefetchgifs se deberia probar aparte, por lo tanto aqui se usará un mock
	test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {});
});

