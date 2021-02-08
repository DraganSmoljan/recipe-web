import GetRecipes from "./services/edamamApi.js";
import Recipes from "./components/recipes/recipes";

export const TestPage = (props) => {
  const [data] = GetRecipes();

  return (
    <div>
      {" "}
      {data.map((item) => (
        <Recipes
          label={item.recipe.label}
          calories={item.recipe.calories}
          image={item.recipe.image}
        />
      ))}
    </div>
  );
};
