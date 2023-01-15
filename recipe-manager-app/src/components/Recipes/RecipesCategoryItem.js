import { useContext } from "react";
import RecipesContext from "../../store/recipes-context";
import classes from "./RecipesCategoryItem.module.css";

export default function RecipesCategoryItem(props) {
  //| get recipes for this category
  const ctx = useContext(RecipesContext);
  const currentCategory = props.category;
  const categoryRecipes = ctx.recipes.filter(
    (recipe) => recipe.category === currentCategory
  );

  return (
    <section>
      <header>{currentCategory}</header>
      <main>
        <ul>
          {categoryRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      </main>
    </section>
  );
}
