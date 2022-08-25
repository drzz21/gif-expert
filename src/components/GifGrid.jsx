import React from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
//se recomienda para llevar orden primero hacer las importaciones de react, luego las de terceros y luego las nuestras

export const GifGrid = ({ category }) => {

  //destructuramos los campos que enviamos desde el hook
  const {images,isLoading}=useFetchGifs(category);


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

