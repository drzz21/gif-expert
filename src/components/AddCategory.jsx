import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length < 1) return;

		// setCategories((cat) => [inputValue, ...cat]);
		// setInputValue('');
		onNewCategory(inputValue.trim());
		setInputValue('');
	};

	return (
		<form aria-label="form" onSubmit={(event) => onSubmit(event)}>
			<input
				type="text"
				placeholder="Buscar gifs..."
				value={inputValue}
				//lo de abajo es equivalente a esto de arriva, como
				//el metodo recibe un event y emite un event, podemos solo poner el metodo
				//que llamamos y de todos modos le va a llegar el event
				// onChange={(event) => onInputChange(event)}
				onChange={onInputChange}
			/>
		</form>
	);
};
//definimos la proptype obligatoria
AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
};

