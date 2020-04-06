import React from 'react';
import style from './recipe.module.css';



const Recipe = ({image, title, calories, ingredients}) => {
	return(
		<div className={style.recipe}>
			<h1>{title}</h1>
			<ol>{ingredients.map((ingredient, i) => (
				<li key={i}>{ingredient}</li>
				))}
			</ol>
			<p><b>{parseInt(calories)}</b> calory content</p>
			<img src={image} className={style.image} alt=""/>
		</div>
	);
}


export default Recipe;

