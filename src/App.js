import './App.css';
import {Recipes} from './components/recipes/recipes'
import {GetRecipes} from './services/edamamApi.js'

function App() {

  const [data] = GetRecipes()

  return (
    <div className="main-container">
    <form>
      <input></input>
      <button type='submit'>Search</button>
    </form>
    {data.map(item=>(
      <Recipes 
      label={item.recipe.label} 
      calories = {item.recipe.calories}  
      image = {item.recipe.image}
      />
    ))}
  </div>
  )
}

export default App;
