const { render } = require('@testing-library/react');
const { GifItem } = require('../../src/components/GifItem');

describe('Pruebas en GifItem', () => {
	const title = 'saitama';
	const url = 'https://one-punch.com/saitama.jpg';

	test('debe de hacer match con el snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});
});

