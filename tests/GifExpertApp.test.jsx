import { render,screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('pruebas en <gifexpertapp/>', () => {
	test('debe mostrar titulo gifexpert', () => {
		render(<GifExpertApp />);
    // screen.debug();
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
			'GifExpert'
		);
	});
});
