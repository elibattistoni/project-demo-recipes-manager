import { useContext } from "react";
import RecipesContext from "../../store/recipes-context";
import classes from "./RecipesCategoryItem.module.css";
import { foodCategories } from "../../config";
import RecipeItem from "./RecipeItem";

export default function RecipesCategoryItem(props) {
  //| get recipes for this category
  const ctx = useContext(RecipesContext);

  const currentCategory = props.category;
  const { label: currentCategoryLabel, primaryColor: currentCategoryColor } =
    foodCategories.filter((cat) => cat.value === currentCategory).at(0);

  let currentRecipes;
  if (ctx.filteredRecipes.length > 0) {
    currentRecipes = ctx.filteredRecipes;
  } else {
    currentRecipes = ctx.recipes;
  }
  const categoryRecipes = currentRecipes.filter(
    (recipe) => recipe.category === currentCategory
  );

  return (
    <div className={classes.recipesColumn}>
      <header className={`${currentCategoryColor}`}>
        {currentCategoryLabel}
      </header>
      <main>
        {categoryRecipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            color={currentCategoryColor}
          />
        ))}
      </main>
    </div>
  );
}
