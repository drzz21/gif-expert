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

		//jest fn es un mock osea una simulacion
		//no la implementacion real
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);
		//obtenemos el input, si hubiera mas de uno podriamos usar arialabel
		const input = screen.getByRole('textbox');
		//lo obtenemos con aria label
		const form = screen.getByRole('form');
		//disparamos el evento input en el input
		fireEvent.input(input, { target: { value: inputValue } });
		//disparamos el evento submit dentro del formulario
		fireEvent.submit(form);
		screen.debug();

		//despues del submit se limpia el value del input entonces estamos esperando que sea igual a string vacio
		expect(input.value).toBe('');

		// expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test('no debe de llamar el onNewCategory si el input esta vacio', () => {
		//declaramos la funcion que pasaremos como parametro
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		//hacemos submit del formulario, notar que no asignamos valor al input entonces no se deberia hacer nada
		const form = screen.getByRole('form');
		fireEvent.submit(form);

		// expect(onNewCategory).toHaveBeenCalledTimes(0);
		//aqui deberiamos esperar que la funcion no se llame porque en handlesubmit
		//hace la validacion y si el input está vacio no llama nada
		expect(onNewCategory).not.toHaveBeenCalled();
	});
});

