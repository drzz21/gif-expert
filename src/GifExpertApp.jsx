import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
	const onAddCategory = (newCategory) => {
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
			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
		</>
	);
};

