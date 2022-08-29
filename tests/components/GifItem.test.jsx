const { render, screen } = require('@testing-library/react');
const { GifItem } = require('../../src/components/GifItem');

describe('Pruebas en GifItem', () => {
	const title = 'saitama';
	const url = 'https://one-punch.com/saitama.jpg';

	test('debe de hacer match con el snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});

	test('debe de mostrar la imagen con el url y el alt indicado', () => {
		render(<GifItem title={title} url={url} />);
		//esto del debug nos va a imprimir el html del componente, que es el objeto de pruebas
		// screen.debug();
		// expect(screen.getByRole('img').src).toBe(url);
		// expect(screen.getByRole('img').alt).toBe(title);
    //podemos para hacer mas sencillo esto destructurar los parametros qu queremos evaluar en eeste caso el src y el alt del elemento imagen
		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

  test('debe de mostrar el título en el componente', () => {
    render(<GifItem title={title} url={url} />);
    //con esto buscamos que el texto esté en el componente, podriamos pensar que como esta el titulo por atributo siempre retonará
    //true pero el getbytext no busca por atributo, literalmente busca que se esté mostrando en el html el títulio
    expect(screen.getByText(title)).toBeTruthy();

  });
});

