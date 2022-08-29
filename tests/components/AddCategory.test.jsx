import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('pruebas en <addCategory/>', () => {
	//en esta prueba estamos renderizando y extrayendo el input,
	//ojo que el elemento se obtiene como texxtbox y no como input
	//despues disparamos un evento inpout y le enviamos el valor de saitama
	//esto dispara el evento que tiene el elemento para el input y asigna la propiedad saitama al valor value
	//despues confirmamos que el input tenga ese valor, esto nos diria si estamos manejando bien el state de ese input
	test('debe de cambiar el valor de la caja de texto', () => {
		//se crea el sujeto de pruebas
		render(<AddCategory onNewCategory={() => {}} />);
		screen.debug();
		//extraemos el input
		const input = screen.getByRole('textbox');
		//disparamos el evento
		fireEvent.input(input, { target: { value: 'Saitama' } });
		//hacemos asercion
		expect(input.value).toBe('Saitama');
		// screen.debug();
	});

	test('debe de llamar onNewCategory si el input tiene un valor', () => {
		const inputValue = 'Saitama';
    //TODO: ????
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    //lo obtenemos con aria label
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    screen.debug();

    expect(input.value).toBe('');


	});
});

