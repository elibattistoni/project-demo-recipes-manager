import { useContext } from "react";
import RecipesContext from "../../store/recipes-context";
import classes from "./RecipeItem.module.css";

export default function RecipeItem(props) {
  const ctx = useContext(RecipesContext);

  function viewRecipeHandler() {
    ctx.onActivateRecipe(props.recipe.id);
  }

  return (
    <div className={classes.recipeCard} onClick={viewRecipeHandler}>
      <header className={`${props.color}-lighter`}>{props.recipe.title}</header>
      <main>
        <img src={props.recipe.imageUrl} alt={props.recipe.title} />
      </main>
    </div>
  );
}
