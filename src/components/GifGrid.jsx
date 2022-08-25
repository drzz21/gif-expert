import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
	//si se deja la dependencia vacia de este hook//
	//esto le dice a react que esto solo se va a ejecutar la primera vez que se ejecuta el componente
	useEffect(() => {
		getGifs(category);
	}, []);

	return (
		<>
			<h3>{category}</h3>
		</>
	);
};

