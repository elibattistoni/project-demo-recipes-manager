import classes from "./Recipes.module.css";
import RecipesCategoryItem from "./RecipesCategoryItem";
import { foodCategories } from "../../config";
import { FaTrash } from "react-icons/fa";
import { Fragment, useContext } from "react";
import RecipesContext from "../../store/recipes-context";

export default function Recipes() {
  const ctx = useContext(RecipesContext);

  function removeAllRecipesHandler() {
    ctx.onRemoveAllRecipes();
  }
  return (
    <Fragment>
      <section className={classes.recipesContainer}>
        {foodCategories.map((cat) => (
          <RecipesCategoryItem category={cat.value} key={cat.key} />
        ))}
      </section>
      <footer className={classes.footerTrash}>
        <button
          type="button"
          className={classes.trashBtn}
          onClick={removeAllRecipesHandler}
        >
          <FaTrash className={classes.trashIcon} />
        </button>
      </footer>
    </Fragment>
  );
}
