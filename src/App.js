import React, {useEffect, useState} from 'react';

import Recipe from './components/Recipe';
import './App.css';






const App = () => {

const API_ID=process.env.REACT_API_APP_ID;
const API_KEY=process.env.REACT_API_APP_KEY;


const [search, setSearch] = useState('');
const [recipes, setRecipes] = useState([]);
const [submitQuery, setSubmitQuery] = useState('chicken');


const api_url = `https://api.edamam.com/search?q=${submitQuery}&app_id=${API_ID}&app_key=${API_KEY}`;

const getRecipes = async () => {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data.hits);

  setRecipes(data.hits);
};

useEffect(() => {
  getRecipes();
}, [submitQuery]);


const updateSearch = (e) => {
  setSearch(e.target.value);
};

const getSubmittedQuery = (e) => {
  e.preventDefault();
  setSubmitQuery(search);
}


  return (
      <div className="app">
        <form className="search-form" onSubmit={getSubmittedQuery}>
          <input type="text" className="search-input" value={search} onChange={updateSearch} placeholder="Search food recipes"/>
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="recipes">
          {recipes.map((recipe, i) => (
            <Recipe
              key={i}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredientLines}
            />
          )
          )}
        </div>
      </div>
  );
};

export default App;
