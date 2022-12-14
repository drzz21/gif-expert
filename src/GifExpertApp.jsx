import { useState } from 'react';
//con el archivo de barril redujimos estas exportaciones de dos archivos a una de un solo archivo
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);
	const onAddCategory = (newCategory) => {
		if (
			categories
				.map((x) => x.toLowerCase())
				.includes(newCategory.toLowerCase())
		)
			return;
		setCategories([newCategory, ...categories]);

		// setCategories([...categories,'Valorant']);
		//setCategories((cat) => [...cat, 'valorant']);
	};

	return (
		<>
			<h1>GifExpert</h1>
			{/* la propiedad setcategories de addcategoryes va a recibir la propiedad setcategories de gifexpert */}
			<AddCategory
				// onNewCategory={event=>onAddCategory(event)}
				onNewCategory={onAddCategory}
				// setCategories={setCategories}
			/>
			{/* <button onClick={onAddCategory}>Agregar</button> */}

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
				// <div key={category}>
				// 	<h3>{category}</h3>
				// 	<li>{category}</li>
				// </div>
			))}
		</>
	);
};

