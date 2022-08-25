import React from 'react';
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);

	const getImages = async () => {
		const newImages = await getGifs(category);
		setImages(newImages);
	};

	//si se deja la dependencia vacia de este hook//
	//esto le dice a react que esto solo se va a ejecutar la primera vez que se ejecuta el componente
	useEffect(() => {
		//no podemos uasr await aquí, podemos usar el then, ya que intermanete getgifs es un metodo promesa
		// getGifs(category).then((newImages) => setImages(newImages));

		//otra forma es como la pusimos ahora, ponemos el metodo async fuera del useeffect y de aqui lo llamamos
		getImages();
	}, []);

	return (
		<>
			<h3>{category}</h3>
			<ul>
        {/* destructuramos los paramas de img */}
				{images.map(({ id, title, url }) => (
					<li key={id}>{title}</li>
				))}
			</ul>
		</>
	);
};

