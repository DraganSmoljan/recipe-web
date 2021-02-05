import logo from './logo.svg';
import './App.css';
import Recipes from './components/recipes/recipes'
import { useState, useEffect } from 'react'
import SearchBar from './components/search-bar/search-bar'

function App() {

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const ID = 'd3936985';
    const KEY = 'e1971e786db3a05b837cfd472cbd39f0';
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log("recipes",data);
  }

  return (
    <div className="main-container">
      <form>
        <input></input>
        <button type='submit'>Search</button>
      </form>
      {recipes.map(item=>(
        <Recipes 
        label={item.recipe.label} 
        calories = {item.recipe.calories}  
        image = {item.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
