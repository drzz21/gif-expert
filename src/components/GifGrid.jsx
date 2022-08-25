import React from 'react';
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
//se recomienda para llevar orden primero hacer las importaciones de react, luego las de terceros y luego las nuestras

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
			<div className="card-grid">
				{/* destructuramos los paramas de img */}
				{images.map((image) => (
					<GifItem key={image.id}
          // de este modo le mandamos todos los parametros de image
          //y podemos destrucutrar para usar en el hijo solo los que queramos
          {...image} />
				))}
			</div>
		</>
	);
};

