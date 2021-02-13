import React from "react";
import GetRecipes from "../services/edamamApi.js";
import Recipes from "../components/recipes/recipes";

export default function Home() {
  const [recipesData] = GetRecipes();

  return (
    <div className="shopping-list">
      <form>
        <input></input>
        <button type="submit">Search</button>
      </form>
      {recipesData.map((item) => (
        <Recipes
          label={item.recipe.label}
          calories={item.recipe.calories}
          image={item.recipe.image}
        />
      ))}
    </div>
  );
}
